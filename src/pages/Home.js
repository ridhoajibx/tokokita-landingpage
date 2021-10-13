import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/light";
import Hero from "components/hero/TwoColumnWithVideo.js";
import Features from "components/features/ThreeColSimple.js";
// import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
import TabGrid from "components/cards/TabCardGrid.js";
import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
import DownloadApp from "components/cta/DownloadApp.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";

// Image
import heroImage from "../images/hero-screenshot-11.png"

import chefIconImageSrc from "images/chef-icon.svg";
import celebrationIconImageSrc from "images/celebration-icon.svg";
import shopIconImageSrc from "images/shop-icon.svg";

export default () => {
    const Subheading = tw.span`tracking-wider text-sm font-medium`;
    const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
    const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
    // const Description = tw.span`inline-block mt-8`;
    const imageCss = tw`rounded-4xl`;
    return (
        <AnimationRevealPage>
            <Header />
            <Hero
                heading={<>Toko Onlinenya Jaman Now, Ya! <HighlightedText>TokoKita.</HighlightedText></>}
                description="Satu aplikasi yang membuat hidup kita lebih efisien, dari kemudahan berbelanja hingga kesehatan anda. Segala jenis layanan dalam satu genggaman. jadikan semua lebih mudah dengan tokokita."
                // imageSrc="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
                imageSrc={heroImage}
                imageCss={imageCss}
                imageDecoratorBlob={true}
                primaryButtonText="Cuci Sekarang"
                watchVideoButtonText="Mari Berkenalan"
            />
            <TabGrid
                heading={
                    <>
                        Produk <HighlightedText><i>TokoKita</i>.</HighlightedText>
                    </>
                }
            />
            <Features
                heading={
                    <>
                        Amazing <HighlightedText>Services.</HighlightedText>
                    </>
                }
                cards={[
                    {
                        imageSrc: shopIconImageSrc,
                        title: "230+ Lokasi",
                        description: "Lorem ipsum donor amet siti ceali placeholder text",
                        url: "https://google.com"
                    },
                    {
                        imageSrc: chefIconImageSrc,
                        title: "Profesional Mitra",
                        description: "Lorem ipsum donor amet siti ceali placeholder text",
                        url: "https://timerse.com"
                    },
                    {
                        imageSrc: celebrationIconImageSrc,
                        title: "Layanan Kurir",
                        description: "Lorem ipsum donor amet siti ceali placeholder text",
                        url: "https://reddit.com"
                    }
                ]}

                imageContainerCss={tw`p-2!`}
                imageCss={tw`w-20! h-20!`}
            />
            <MainFeature2
                subheading={<Subheading>A Reputed Brand</Subheading>}
                heading={<>Kenapa Memilih <HighlightedText>TokoKita ?</HighlightedText></>}
                statistics={[
                    {
                        key: "Pelanggan",
                        value: "11000+"
                    },
                    {
                        key: "Mitra",
                        value: "1500+"
                    }
                ]}
                primaryButtonText="Order Now"
                primaryButtonUrl="https://order.now.com"
                imageInsideDiv={false}
                imageSrc={heroImage}
                imageCss={Object.assign(tw`bg-cover`, imageCss)}
                imageContainerCss={tw`md:w-1/2 h-auto`}
                imageDecoratorBlob={true}
                imageDecoratorBlobCss={tw`left-1/2 md:w-32 md:h-32 -translate-x-1/2 opacity-25`}
                textOnLeft={true}
            />
            <Testimonial
                subheading=""
                heading={<>Pelanggan <HighlightedText>TokoKita.</HighlightedText></>}
            />
            <DownloadApp
                text={<>People around you are using the <HighlightedTextInverse>TokoKita App.</HighlightedTextInverse></>}
            />
            <Footer />
        </AnimationRevealPage>
    );
}
