"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var prepareAudioElement_1 = require("../services/prepareAudioElement");
var const_1 = require("../services/const");
var node_vibrant_1 = tslib_1.__importDefault(require("node-vibrant"));
var parseVibrantColors_1 = require("../services/parseVibrantColors");
var isNode_1 = require("../services/isNode");
var defaultValues = {
    actions: {
        setAudio: function () { },
        setCarouselRotation: function () { return null; },
        toggle: function () { return null; },
        next: function () { return null; },
        previous: function () { return null; },
    },
    state: {
        audio: prepareAudioElement_1.prepareAudioElement(),
        currentTime: 0,
        carouselRotation: 0,
    },
};
exports.AppContext = react_1.createContext(defaultValues);
exports.ContextProvider = function (_a) {
    var initialState = _a.initialState, children = _a.children;
    var _b = react_1.useState(), audio = _b[0], setAudio = _b[1];
    var _c = react_1.useState(0), currentTime = _c[0], setCurrentTime = _c[1];
    var _d = react_1.useState(0), carouselRotation = _d[0], setCarouselRotation = _d[1];
    var _e = react_1.useState(), vibrantColors = _e[0], setVibrantColors = _e[1];
    var getColors = react_1.useCallback(function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var palette;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!!isNode_1.isNode) return [3, 2];
                    return [4, node_vibrant_1.default.from('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSEhIVEhIQFRcVFRUQFRUPFRUVFRUWFhUVFRUYHSggGBolGxUVITEhJSkrLi4uFyAzODMtNygtLisBCgoKDg0OFhAPFi0dHR0tKy0tLS0tLS0rLS0tLS0rLS0tLSstKy0tLS0tLS0tKy0rMC0tLS0tLS0tKy0tNzcrK//AABEIAKoBKQMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAADBAIFAQYHAAj/xABDEAABAwIDBAgDAwoFBQEAAAABAAIDBBESITEFBkFRBxMiYXGBkaEyscEjQnIUQ1JigpKissLRJDNT8PFjc4Oz4TT/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQMCBP/EACARAQEAAgMAAwADAAAAAAAAAAABAhEDITESIlETMkH/2gAMAwEAAhEDEQA/ALrZ5zViFVbPOZVmHKsRgvLDEQKKhhXsCIApYEC+DNRfHZMYVh7UC2Fewo4YiNhQKBilhTDorFDqHW0FydBp5k8AhoJzUtMzNa/tn8pe7szlrR92P7MeoNz5lRoJKqO+J4naPuuPa/Zcc7+N/quflj+u/wCPL8bBG3NSkbmvbOmbKGvYbtd5EEZEEcCDkmJWZrpwG2PJS6tFYMrIoagXEakG2RxHkvdWgFZEjjzU2sRYmZoBubyXiAAS4hrWi5JNgBzJWa2pZDG6SQ2awXJ+gXKd7N6H1b2tiDmRgEBvFxvqQNdAiyN/rd46SO/27XW4R3fnyuMkbZ+0oZmh0cjSHcCcLr8QWnO+YXMoN2pXDE8hl+Gp81Z7N2LUx9uF4f1fxAHC8N+8c9RbWy5+U/Wn8d06cwFHh0sQqvdquM8IecyCQTYC/LQkaWV5TtXTPRdzElO3tFXEsaraplnIIQp0T5aaJSJqI8IM47oeDvU3BBc6yBeqFlXyJ2d10m8oikn4pe6ZqRmUrZdIuqAZ+SsgkdnjVPrkGiRgEKEo4RWWhSsstCnZFCAXntRQ1ec1ABrEaMKULFMNsUApm6Kt2tI2JrpXuDRcMBdkLanzJ+QVxI3Ra/vRTdbEG52cC5pbkcTtDplYLnO9NOOXe1KZ2yXexzS3mCCF6jqQTkQbciCk59j9XTkX7UhxccgCBYnvsUhQ7HfG8OBAHcLG3Ika+ax1P16LbrxsW7YwzTsHwlwkA5OdcO+TVsEjM81S7vD7eTPgy3fqVscsea3njyZTuoQNFkUNRYWZIoYqhXAVkRprAsYEC4jUmtRsC8GINL6SKsthZFnhlJJI/V0HdmQtG3WiHWlxF8AJ9bf/AFb30n0jnQxuBGEOIN+Dja1ueQPotR3fpOpe67sWNotlbQkEd9svVc5361rx49n9o7Rc21ibYg02ZjAJBIDiTrYE5K0pNpOpwJ22JaRcYHPysS4kA5DLVBnpGkXI70LZ93ymMm4eCGsw5EWse1+la5B0BAWM78emzqtx2HKBO+NmExvjbOwNNi1r/u4SAQBmPYq+jbyUYojjJwht4o+00WBuX3Hjx/aRmDNbzx48vUZGFJVrLHyVsAq6vzIVcl6caqTgs0+qK5qBZ5SsqamCUkCIXelpAmnIDggo64dopNWG0W2ckbKxF/QDVPFqV2e3VOkKKnEEw0IUQyTACCbQpWXmtU8KKg1qy5qk0KRagGwIuFYhajtagAWqj3oquqhB4M+RWxPjVPvRQdZCeTbE25A3uucpt3hlque7U2hI4AGSzQQRYgC3Id2ZP/KaftgGMW1581V7UqmmQvLji0sDZthloldk3llawfecBlwBOa5+O2vzbxudA4udIdCcr58LGx5Zey2mVuajSwBtg0AAcBkmZW5ruTTHLLb0LckUNXodERrSqgRCxYo+BewoBYSsBqOGrOFEah0ibPLqYTM+Onc13cRfiL5i5+a0iPaLJgJGNcHRdl99Gl+dv1vh1XY6yhZNG+J4uyRpa6xsbHkeBWi1u50dFFI5sjpOuc0HGALWx2+fsuM51ttx5WdfqnbVh7bAou7+zQ+siFmnFcm7nYshcEO1DhbLPgtZqaMgkC48ytt6L93nTymd7nYITYC/xG3PgFxMfytbn1qx0+ZuduQA9AoMbmptXgM1s8wcg5JGqN1ZuakKpmhRKXj1RygM1TDOSITqEEck1KzVAazmgXlZySpCsZAkpGZoik2oM/JVuFW21W5jwVbZWI2LZzcinXDJLbObknHDJRUom5IwQ4UVFgrVMKDQiBCMNWSF5hUiisxBNxRXS9M25VDt7fmnpSWtJmkGVmZNB5F/9rppGyTtQJBdruIsuR7a6RKme7QRCwgj7K4dnlm85+llvOzd5IJKVnUlrS1rQ6MZFhAzFuWWRUz3I7wm60Te7Y463EG2xZm2Sa3QohG4PIsRpdN7aeZH5AkcAOHNL9YIG45XCMDi45nwGpPcFlu602+MbbVbyRwOaJgWxuy6wdsB2Zwloz0Gourqlq45mh8TxIw8Wm/keR7iuEbxbfNS8WuI474b6knVxH04JOi2jJGcTHuY7mxxafULfHG67YZa30+kYW5dyLhsuKbB37q43s6yZ0kTXDE12Fxc3iMRF7+a7VRVDJo2SxnEyRoc09x58jwslmkj2FZDUQBesoukQFkNSu19pxUsTppnYWt5Zlzjo1o4krlm8XSdNJdtOOoYRa+TpPHF90+Csm026Jt3eqlpLtlk+0DcXVsBe430HIE95C1rebeQVEbWxtsw4XYiQScsrW4Zrj9RUueSSbkm5JzJJ4lNbO25JEMB7cf6JNrfhPDw0TPC2dOuPKS9tpqS05ldG6M54207WtObnEuvwXKRtumkGZcwng5pPu26izeVkDS2F73YrEgfZgkcyc/QLGY5T/G+Vxs9di3g3jZTvLcGPC5odY4cnZm3eL38ipbF3mpqnJj8D7lvVyWa+4/Rzs4eC4ZPvLLI7FJnne1z6k6k95SDa5wNwbLfHDrt58r30+nS1K1jclxfYfSHVQ2a5+NvJ/a9DwXWNlbWbVQCQZOBs5utj/ZLjpztNmqLhQxqjgZrkiJZkgmNNuGSA4IFJG2ScmqsHtSUwQU+1hoqvCrfabcvNVaqNg2boU84ZJPZpy80852Sg9CiIcCKEVNqK1DAUwhHmqRUWrJKKrN5q8wU0jmmznDA3xdr7XXGKztZrp3SHUWijbzcT6C31XMpHAi400XePjm+qyXJCZM5pu1xaRoWktPqFOYpdy6dLB23aki3Xv8AI2PqM1XyyOccTnFx5vJcfUqK8pJI6YRYyhKQKqG4nrrHRFty4fSOOYvJHf8AjaPZ1vxLj2JXG7e1DT1MUw/NvaT3t0cPNpI81LEfSRUVm9wCMwcx4cEKpmEbHyO+GNrnnwaCT8lmrjnStvAZqj8nafsqUluWjpT8Z8vh8jzWhEo1bMXuc92bnuLj4k3KVDltHLxUSvFeRUV4LxXkEgskqKygJB8Qvpe58Bquj9G21i1/VuOUgtbvyI9yB5rmbT6Kx2ZXujJcDYixH4sbTf2Krmx9CcU25uarqOoEkbJBo9rXeourXEsFiDggEI7igFAB4SVQnZClJwgrNpDs+ap7K7r29kqnsrHK82dofFOF2SRoPh802dFFFgKMEvTlMBFFaFMKAUkI8wrLlGMKTkHM+lCu+0bGPuNHqTc+1losc9+z428z/wAK635q+sqZCNMRA8BkPktbpz2295t6rSILUNSjk7Vnlp4WSDyq6jCySsLxRWCVm6gpNCI81HaUSio3yOwsaXHusPcq4O68rRieWt7gcZ8+C5uUnqyW+O1dHW2BVUMTibviHUyc8UYsCfFuE+aPv/UdXs+oI1c0Mb4vc1v1VT0TwxsoyGNAkEhEp4uORaT+ybeSn0svf+RNDRdplbizzya4iwtmP7Bcz1NOD1JsSOASwKNU6pZpzWoMF4rCxdB5eXlgIJAqUYuR4oZClCbFAJ2tuRN/LJFD8rf7/wB5oJfdzj3n5lMU8DnmzWkk6f8AKmx3DcOs6yii5xjAfLRbeDkPBc66NtnVEEb2zRljH2cwktNz4A30suhRHsjwWeXrmRMpdxRHFLPOaioyJScpl5SdQUCtYLsPgqRXUp7J45Kluqi7oD2AmickpR/CEdxyKgNTFMXzSdMmQEUdpRWlBaEYNQeiWZNCvRBTc2+XNBqW/uz6d7WY4mGQjN4GF3PNwzPmtI2Xu3HNUsia0jETc3JsACScz3LY979pY53AaNNgmujSnxVMkh/Nx2Hi9w+jSuMbdtspJHL64ZkKrmVzvFGY5pGHVj3tPi1xCopnL0MY8HrN0FpUwUVNTjQ1JqDq24+yWv2TUSNAMrZsdxraFjez+66T95Qe/G3yV/0Jwn8hluOy+d+uhHVxtPuCFrVdTmnnkgN/s3lo726sPm0g+a8/JO2vHWw9GEpZUSxHSSPEPxMdb5PPor3pHdaKJvOQn0bb+pavutMGV1OQbY3Fh8HMcLepCv8ApGnvLHGPzbC4+LzYezfdTf1da+7Q9oxMwklrT4gFaFtKlexwc5uEStD2cnMLnNDh5sd6Lb9u1RwkDgPdS6WqbqZqWlAsKWiiZfiTifiN+ObfcrvhjnlrQwshYXmrdkkvBeWEGSvHgsFTAyv3pRdbpbOa4uc9gcMsJcLi41tfLktu2ZE38pja4Atvpw9FOCmMezaB9rYhUX8HTFzfYlKQSEPbJ+i4H3Xl5L9no4/6up1mTiOVvkEanddoStTJchw0c1p9WhFpj2fNdx576M9yVkcjPclZSqiL3JWYo7ylpUQu/RVWFWd0nZBZ0vwjwTBbkgUvwjwTXBBGlGqaDc0Ck4pxuoRU42IwYsAIzUA4GZrFS/A1zv0QT7ItPqq/eSTDA+3EWUvjqeuV1z8by48SSui9GVCG0zpOM0hz/VZ2R74lzacWC7LuxB1dJA3T7Nrj4vGM+7ipi7zcB38Lvy2pxa9fJe2X3jY+llrBK2XpAYG11SGm/wBs/M5m5cSb+ZI8lqxW7KMhSCiFkIqYKm1QDUVgQd56E58VAW/6c0jfUNf/AFpbpMpLVEUo/OsLT4xnX0ePRB6DZf8ADVDOUod+8wD+hWvSY28cDv0ZHD95t/6Vll/rrG9tKpZsE0LxqyaM+jwVf701HWVU7r6OwD9gBvzBWrVTrEHjcWurGWcvLnnV7nOPi4k/VY3xvj3Vfs2hM1ZTxa45mX/A12J/8LXLHTW4u2k65+CGJoHIdp/zetm6M6bHXukIyghcR3Oe4NH8ONal0suDtpz2zt1Y9ImLfjYZ3torgsWRXBRIWrlErBWVEoPI2gA55oF0TEg6nT1Bk2LRu/0Z5Ij4faEe2FVbjZpTe6j8Ww6gH81VsI/a6kfUqsrH9lebknbfivTpGyZcdPE79QD0yVrSHsrXt0X3pI78Lj3V/SHIrqeMcv7VN6VmTTkrMVXILyl5SjPKXkciFSUPCpErF0D9Och4JgnJJU0nZHgmC7JAejOqcacwqykenBJmEVYAot0o2RFxoCU5zVVvY77F3f8A2VhTuzVfvK4dSb/7yKl8dY+uXzgkho1Jt5ldyhZhaGj7oDfQWXGNgQ9ZWQN1HWB3k3tH5LsheEi5Pm3fWYOrakjQzy/zuWvOKsttPxSyOBBD5HuuMr4nE3APiqxwWzllhRQhNCKChRGhMRNS7GpuFqDpfQvVhs08XGSNrx/43EO/9g9Fum/0OOjcf9N7H++E+ziuYdG9QYq6LlJijPg5pI9w1dc20zHTzN5xP9Q0ke4CzyJXKZ87HXMJtuTUk8ZBMyutHfuWOU8ejC+t76K6PDDLMRnPJhH4IhYfxOf6LlG/cpfXVTzxne0fsHB8mrue61L1NJAwixEYLvxP7bvdxXEOkXCK+oa3QSEn8T7Pd7uW+Dz5VqxCwQpuWHBaAJCG4I5Q3BQDCy1esstCDqG5Ed9jVo/XD/3cB/oVDVO7Kv8Ao3lvSVNOdJI3keOC39S1uV3YHeseSdteK9V0XdLKlj8/mr+idqqLd7Kli7239yrWjfmfBWeMsvaceUtMVN7kvM5EDeUtIUVzkvKUQs8qGJekOaxj7kDFM/sjwTGPJVsEnZHgjiRAzTSZp0SZhVFPJmnBJmEFoJEYSKvbIidagbp5M1X7zSfZEcz9CiQS5pLbwL2ADg76KXx1j613ciH/ABgJ+4159ez9V0eoqAGOLjYBpJJ0AAzK59sCYQzhztCC0nlcix9Qtj3qm/wk9j8UZb+9l9Ui5OBVIB7kphVtVwZm4SDo+5bIFZFiavRx5phrUHo407DGoQMT9NEptKf2DJ1VRDIdGSMJ8A4X9rrs1ZJaOT8Dv5SuNRQrpO0qw9VGzQyNaXeFhceq4yI1Gogy7whTsuwDnl6qzrYbA8Mj8lX2PVnmsq3x8rr1VUiKN7z8MTHOPgwE/RfN20p3SyPlf8Ur3PPi4lx+a7xX1jJqOR5daOSB5J5AsN/MLgk5ut8WF9KkKNkRwUSuhAobkRRIRQlKNtyvFqJCM0G+dG05DpBwbBIT4gW+XyVTJ8IHci7IrHU8U72NxPkiDGjX4jmbDkCUrHV4gC4YcIuRztw8VnyTddcWUku3UKEYYIR/02/JM0sna8lS7H2w2oiDmNLer7BDrHNoHEKwp5O0o4qye9LyvWHPQJHojJegPcsF6E96AUhzWLocjs1HGrBGF+QRw9JwfCPBGKqCQSZpsSZhV1PqmeIXKrISogkSTUZuiA0MijVPyuUOnVftw5t81L4uPqrqZO0QPUK43jqCaUc3YP7qrP8AlH8f9Ka2/wD/AJ2eLfkmLrLtpVZETqbqrkpe5XkyRlC0cK1lOL6JiOAckSyNEipU9OE/DCOSHTpyJRynGxbVOC7qra9Uz2BJ+S1wBbPT/m/+0P5Spk6xVe25bMy4kBV7HgMN+Ca3j/y/2/oVUtzFjmLjVZ2N8b1W17qfbUc0J0cXtF+T2g/PNcxqYyHFp1aSD5Gy6Zub8En4m/yrR9ttGM5fePzWuNYZeqR0aC9ibegv4rtCpavYURy8jpFsSPFBmpMR2KI2HY0QDQe66X2jDiJDcsWvrdO0Hwt/AhS6+ax33ttr66bRsyhbBCxjTe4xE8yUeKTtBRH+Wz8I+SE3VdsFgZEJ8iiUF6gkXoE8thdZQ3/RXSBvffNYul49D5pfEeapt//Z').getPalette()];
                case 1:
                    palette = _a.sent();
                    setVibrantColors(parseVibrantColors_1.parseVibrantColors(palette));
                    _a.label = 2;
                case 2: return [2];
            }
        });
    }); }, []);
    react_1.useEffect(function () {
        getColors();
        setAudio(prepareAudioElement_1.prepareAudioElement(setCurrentTime));
    }, []);
    var toggle = function () {
        if (audio && !audio.paused) {
            audio.pause();
            return;
        }
        if (audio) {
            audio.play();
        }
    };
    var next = function () {
        setCarouselRotation(carouselRotation + const_1.CAROUSEL_SINGLE_ROTATION_ANGLE);
    };
    var previous = function () {
        setCarouselRotation(carouselRotation - const_1.CAROUSEL_SINGLE_ROTATION_ANGLE);
    };
    return (react_1.default.createElement(exports.AppContext.Provider, { value: {
            actions: {
                setAudio: setAudio,
                setCarouselRotation: setCarouselRotation,
                toggle: toggle,
                next: next,
                previous: previous,
            },
            state: {
                carouselRotation: carouselRotation,
                audio: audio,
                currentTime: currentTime,
                vibrantColors: vibrantColors,
            },
        } }, children));
};
