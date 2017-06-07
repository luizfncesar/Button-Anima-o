import clippingInfo from "canivete/dist/clippingInfo";
import trigger from "../../../../common/js/trigger";
import addClass from "../../../../common/js/addClass";
import removeClass from "../../../../common/js/removeClass";
import lazyConfig from "../../5377/lazyConfig";
import lazyLoading from "../../5378/lazyLoading";


// Carregamento de imagens apenas quando visíveis (lazyload).

const lazyLoadedNodes = document.getElementsByClassName("medialoader__media");
lazyLoading(lazyLoadedNodes);





const getBannersArray = () => Array.from(document.querySelectorAll(".banner__content"));

const bannerNodes = getBannersArray();

document.addEventListener("scroll", reactToScroll);
window.addEventListener("load", reactToScroll);

const isBannerOffTop = clippingInfo => clippingInfo.isOffTop;
const isBannerClippedTop = clippingInfo => clippingInfo.isClippedTop;
const isBannerVisible = clippingInfo => clippingInfo.isAsVisibleAsPossible;
const isBannerClippedBottom = clippingInfo => clippingInfo.isClippedBottom;
const isBannerOffBottom = clippingInfo => clippingInfo.isOffBottom;

function reactToScroll() {
	bannerNodes.forEach(bannerNode => {
		let clip = clippingInfo(bannerNode);

		if (clip.isOffTop) {
			addClass(bannerNode, "banner--off-top");
		}
		else {
			removeClass(bannerNode, "banner--off-top");
		}

		if (clip.isClippedTop) {
			addClass(bannerNode, "banner--clipped-top");
		}
		else {
			removeClass(bannerNode, "banner--clipped-top");
		}

		if (clip.isAsVisibleAsPossible) {
			addClass(bannerNode, "banner--visible");
		}
		else {
			removeClass(bannerNode, "banner--visible");
		}

		if (clip.isClippedBottom) {
			addClass(bannerNode, "banner--clipped-bottom");
		}
		else {
			removeClass(bannerNode, "banner--clipped-bottom");
		}

		if (clip.isOffBottom) {
			addClass(bannerNode, "banner--off-bottom");
		}
		else {
			removeClass(bannerNode, "banner--off-bottom");
		}
	});
}