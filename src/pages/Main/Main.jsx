import React, { useEffect, useState } from 'react';
import Banner from '../../components/Banners/Banner'
import Product from '../../components/Cards/Product'
import Like from '../../components/Main/Like.jsx'
import Grid from '../../components/Other/BeatifullGrid.jsx'
import DefaultBanner from '../../components/Banners/DefaultBanner'

const Main = () => {
    return (
        <div className="container mt-4">
            <Banner />
            <Grid />
            < Like />
            <div className="mt-4">
                <DefaultBanner />
            </div>
        </div>
    )
}

export default Main;