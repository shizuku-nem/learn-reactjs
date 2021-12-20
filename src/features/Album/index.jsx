import React from 'react';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {
    
};

function AlbumFeature(props) {
    const albumList = [
        {id:1, name: 'Pop Việt Ngày Nay', thumbnailUrl:'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/1/1/c/7/11c769ee8fa3ccfb4a51ced62c860875.jpg'},
        {id:2, name: 'Christmas 2021', thumbnailUrl:'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/b/1/4/2/b1426375d732cbf2ec55246c6eb57141.jpg'},
        {id:3, name: 'V-Pop Đầy Hứa Hẹn', thumbnailUrl:'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/8/5/e/0/85e0bf9c44af63793992e8381c16deb9.jpg'},
    ]

    return (
        <div>
            <h1>Maybe you like</h1>
            <AlbumList albumList={albumList}/>
        </div>
    );
}

export default AlbumFeature;