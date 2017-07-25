class SubscriberFormState {

  /**
   * We use a bigger button size for the Hero component, but as for the
   * footer we use a smaller button.
   */
  getSolidButtonClass = (type) => {
    if (type === 'hero') { return 'btn-info' };
    if (type === 'footer') { return 'btn-info btn-small' };

    throw new ReferenceError('Form solid button has not been set up yet');
  };

  getOutlineButtonClass = (type) => {
    if (type === 'hero') { return 'btn-success btn-outline' };
    if (type === 'footer') { return 'btn-success btn-outline btn-small' };

    throw new ReferenceError('Form outline button type has not been set up yet');
  };
}

export default new SubscriberFormState();
