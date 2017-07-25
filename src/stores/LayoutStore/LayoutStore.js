import { observable, action, autorun } from 'mobx';

class LayoutStore {

  @observable headerContainerClass;
  @observable currentPageName = '';

  constructor() {
    this.calculatedHeightToTransition = 76;

    autorun(() => {
      this.headerContainerClass = this.currentPageName === 'LandingPage' ?
        'header-container is-scrolled' : 'header-container';

      /**
       * When the `currentPageName` is available to us and
       * we're on client side, we will invoke the scroll
       * event listener because the window object is only
       * available on client side.
       */
      if (this.currentPageName && __IS_CLIENT__) {
        if (this.currentPageName === 'LandingPage') {
          this.handleScroll();
          window.addEventListener('scroll', this.handleScroll);
        } else {
          this.headerContainerClass = 'header-container is-scrolled';
          window.removeEventListener('scroll', this.handleScroll);
        }
      }
    });
  }

  /**
   * Checks to see if the window scroll position has reached
   * the calculated height to make a transition and then
   * applies the scroll background transition.
   */
  @action
  handleScroll = () => {
    if (window.scrollY > this.calculatedHeightToTransition) {
      this.headerContainerClass = 'header-container is-scrolled';
    } else if (window.scrollY < this.calculatedHeightToTransition) {
      this.headerContainerClass = 'header-container';
    }
  };
}

export default new LayoutStore();
