"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var styled_1 = require("./styled");
var AppContext_1 = require("../../AppContext");
exports.Carousel = function () {
    var appContext = react_1.useContext(AppContext_1.AppContext);
    var state = appContext.state;
    var carouselRotation = state.carouselRotation;
    return (react_1.default.createElement(styled_1.CarouselWrapper, null,
        react_1.default.createElement(styled_1.ImagesWrapper, { currentRotation: carouselRotation },
            react_1.default.createElement(styled_1.CarouselItem, { className: "item a" },
                react_1.default.createElement(styled_1.AlbumCover, { src: "https://img.discogs.com/v021JfDRlj4NG9UwWnw3BAtOAfA=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-8335524-1543580982-2799.jpeg.jpg", alt: "Album cover" })),
            react_1.default.createElement(styled_1.CarouselItem, { className: "item b" },
                react_1.default.createElement(styled_1.AlbumCover, { src: "https://img.discogs.com/v021JfDRlj4NG9UwWnw3BAtOAfA=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-8335524-1543580982-2799.jpeg.jpg", alt: "Album cover" })),
            react_1.default.createElement(styled_1.CarouselItem, { className: "item c" },
                react_1.default.createElement(styled_1.AlbumCover, { src: "https://img.discogs.com/v021JfDRlj4NG9UwWnw3BAtOAfA=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-8335524-1543580982-2799.jpeg.jpg", alt: "Album cover" })),
            react_1.default.createElement(styled_1.CarouselItem, { className: "item d" },
                react_1.default.createElement(styled_1.AlbumCover, { src: "https://img.discogs.com/v021JfDRlj4NG9UwWnw3BAtOAfA=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-8335524-1543580982-2799.jpeg.jpg", alt: "Album cover" })),
            react_1.default.createElement(styled_1.CarouselItem, { className: "item e" },
                react_1.default.createElement(styled_1.AlbumCover, { src: "https://img.discogs.com/v021JfDRlj4NG9UwWnw3BAtOAfA=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-8335524-1543580982-2799.jpeg.jpg", alt: "Album cover" })),
            react_1.default.createElement(styled_1.CarouselItem, { className: "item f" },
                react_1.default.createElement(styled_1.AlbumCover, { src: "https://img.discogs.com/v021JfDRlj4NG9UwWnw3BAtOAfA=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-8335524-1543580982-2799.jpeg.jpg", alt: "Album cover" })))));
};
