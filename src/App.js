import React, { Component } from 'react';
import Searchbar from './components/Searchbar.js'
import ImageGallery from './components/ImageGallery.js';
import Button from './components/Button.js'
import FetchApi from './components/Fetch.js';
import Modal from './components/Modal.js'
import Loader from "react-loader-spinner";

import './styles.css'


export default class App extends Component {
    state = {
        imagelist: [],
        page: 1,
        loading: false,
        modalVisible: false
    };

    searchQuery = "";
    activeImg = {};
    
    onFormSubmit = async query => {
        this.setState({ loading: true })

        this.searchQuery = query;
        const apiResponse = await FetchApi(this.searchQuery, 1);

        this.setState({ imagelist: [...apiResponse], page: 2, loading: false })
    };

    onLoadMore = async e => {
        e.preventDefault();
        this.setState({loading: true})

        const apiResponse = await FetchApi(this.searchQuery, this.state.page);
        this.setState(prevState => { return { imagelist: [...prevState.imagelist, ...apiResponse], page: prevState.page + 1, loading: false  } })

        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
        });
    };

    onGalleryClick = e => {
        const target = e.target;
        const targetClass = target.className;

        if (!this.state.modalVisible) {
            if (targetClass === "ImageGalleryItem-image") {
                this.setState({ modalVisible: true });
                this.activeImg = { src: target.dataset.url, alt: target.alt };
            };
        } else {
            if (targetClass === "Overlay") {
                this.resetModal();
            };
        };
    };

    onKeyPressed = e => {
        if (this.state.modalVisible) {
            e.code === "Escape" && this.resetModal();
        };
    };

    resetModal = () => {
        this.setState({ modalVisible: false });
        this.activeImg = {};
    };


    render() {
        return <div onKeyDown={this.onKeyPressed} tabIndex="0">
            <Searchbar submit={this.onFormSubmit}/>
            {this.state.loading ?
                <Loader type="Bars" color="#00BFFF" height={100} width={100} className="Loader" /> :
                this.state.imagelist.length > 0 ?
                    <div onClick={this.onGalleryClick}><ImageGallery list={this.state.imagelist}/><Button onBtnPress={this.onLoadMore} /></div> :
                    <h2 className="Placeholder">Тут пока ничего нет. Воспользуйся поиском, чтобы посмотреть картинки.</h2>
            }
            {this.state.modalVisible && <div onClick={this.onGalleryClick}><Modal src={this.activeImg.src} alt={this.activeImg.alt}/></div>}
        </div>
    };
};