import React, { Component } from 'react';

import Spinner from '../../components/UI/Spinner/Spinner';
import Pagination from '../../components/UI/Pagination/Pagination';

class Posts extends Component {
    state = {
        data: [],
        postsPerPage: 4,
        pageConfig: {
            thisPage: 1,
            pagePosts: [],
            lastPostIndex: 0
        },
        error: false,
        errorMessage: '',
        loading: false
    }

    componentDidMount() {
        this.setState({ loading: true });
        fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
            .then(response => response.json())
            .then(json => this.initialPageContent(json))
            .catch(error => this.setState({ error: true, errorMessage: error.message }))
    }

    initialPageContent(json) {
        this.setState({ data: json })
        this.pagePosts(1);
    }

    pageNext = () => {
        this.setState({ loading: true });
        const thisPage = this.state.pageConfig.thisPage;
        const dataLastIndex = this.state.data.length - 1;
        const lastPostIndex = this.state.pageConfig.lastPostIndex;
        if (dataLastIndex === lastPostIndex) {
            this.setState({ loading: false });
            return;
        }
        this.pagePosts(thisPage + 1);
    }

    pagePrev = () => {
        this.setState({ loading: true });
        const thisPage = this.state.pageConfig.thisPage;
        if (thisPage === 1) {
            this.setState({ loading: false });
            return;
        }
        this.pagePosts(thisPage - 1);
    }

    firstPage = () => {
        this.setState({ loading: true });
        this.pagePosts(1);
    }

    lastPage = () => {
        this.setState({ loading: true });
        const data = this.state.data;
        const postsPerPage = this.state.postsPerPage;
        const pages = Math.ceil(data.length / postsPerPage);
        this.pagePosts(pages);
    }

    toPage = (page) => {
        this.setState({ loading: true });
        this.pagePosts(page);
    }

    pagePosts(page) {
        console.log({ page })
        const data = this.state.data;
        const postsPerPage = this.state.postsPerPage;
        const lastPage = Math.ceil(data.length / postsPerPage);
        const pageData = { ...this.state.pageConfig };

        const firstPostIndex = postsPerPage * (page - 1);
        const lastPostIndex = page === lastPage ? data.length : firstPostIndex + postsPerPage;
        const pagePosts = data.slice(firstPostIndex, lastPostIndex);
        pageData.thisPage = page;
        pageData.pagePosts = pagePosts;
        pageData.lastPostIndex = lastPostIndex;
        this.setState({ pageConfig: pageData, loading: false });
    }

    render() {
        console.log(this.state)
        if (this.state.error) {
            throw new Error(this.state.errorMessage);
        };

        let content = <Spinner />;
        if (!this.state.loading) {
            content = this.state.pageConfig.pagePosts.map((post, i) => (
                <div key={i}>
                    <div style={{ height: 'auto' }} className="mr-3" >
                        <img src={post.url} alt={i} style={{ width: '150px', height: '100px' }} />
                        <div>
                            <h4>{post.title}</h4>
                            <p>{post.id}</p>
                        </div>
                    </div>
                </div>
            ));
        }

        return (
            <>
                <div className="d-flex flex-row justify-content-around p-5" style={{ height: '300px' }}>
                    {content}
                </div>
                <Pagination
                    activePage={Math.ceil(this.state.pageConfig.lastPostIndex / this.state.postsPerPage)}
                    pages={Math.ceil(this.state.data.length / this.state.postsPerPage)}
                    pageNextClicked={this.pageNext}
                    pagePrevClicked={this.pagePrev}
                    firstPageClicked={this.firstPage}
                    lastPageClicked={this.lastPage}
                    toPageClicked={this.toPage} />
            </>

        );
    }

};

export default Posts;