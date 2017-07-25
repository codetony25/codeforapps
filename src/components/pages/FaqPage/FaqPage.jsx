import React from 'react';

class FaqPage extends React.Component {

  static displayName = 'FaqPage';
  static READER_FAQ = 'reader-faq';
  static AUTHOR_FAQ = 'author-faq';

  constructor(props) {
    super(props);

    this.state = {
      faqState: FaqPage.READER_FAQ
    };
  }

  renderReaderFaq = () => (
    <div className="reader-faq">
      <div className="question-group">
        <div className="question">
          How much does it cost?
        </div>
        <div className="answer">
          EverLib accounts are free.
        </div>
      </div>
      <div className="question-group">
        <div className="question">
          Why should I buy a book here as opposed to a place like Amazon?
        </div>
        <div className="answer">
          EverLib books are constantly updated by the authors.
          If you buy a book, your book will always be updated when the
          author updates.
        </div>
      </div>
      <div className="question-group">
        <div className="question">
          If I purchase a book, can an author delete it or update it to delete
          all the content?
        </div>
        <div className="answer">
          Unless an EverLib book is found to be in violation of the terms &
          conditions or code of conduct, it will remain in your collection.
          You will have access to all updates of a book, so if the content
          of a book changes, you will always be able to view the previous
          versions.
        </div>
      </div>
      <div className="question-group">
        <div className="question">
          Can I get a refund if I don't like a book?
        </div>
        <div className="answer">
          We do not provide refunds for books that you don't like. We recommend
          to read the reviews and the author bio before purchasing a book. If
          you don't like a book, please provide a detailed review about what
          you think was wrong with it. This gives the author a chance to make
          proper updates, and let's the rest of the community know what your
          feedback is. Refunds will only be provided in some cases if a book
          is removed from EverLib.
        </div>
      </div>
    </div>
  );

  renderAuthorFaq = () => (
    <div className="author-faq">
      <div className="question-group">
        <div className="question">
          How much does it cost?
        </div>
        <div className="answer">
          EverLib accounts are free.
        </div>
      </div>
      <div className="question-group">
        <div className="question">
          How much can I make writing books on EverLib?
        </div>
        <div className="answer">
          The sky is the limit. We recommend giving a book or two away
          for free, to let readers understand your style and skills. Even
          then, readers can "tip" you when they add your free books to their
          collection. EverLib is an open market. You can charge whatever
          you'd like for your book, in $2 increments. When your book sells
          on EverLib, you make a 50% commission. For every book in your
          Library, we provide you with a link to advertise your book through
          your own resources: Twitter, Facebook, etc. If you sell a book from
          your own advertisement link, you will receive a 90% commission.
          (Hey, we still have to pay our fees!)
        </div>
      </div>
      <div className="question-group">
        <div className="question">
          How often can I update my book?
        </div>
        <div className="answer">
          We recommend updating your book often. This is one of the main
          reasons readers come to EverLib. The more up-to-date your book
          is, the higher the likelihood new readers will find it and
          current readers will recommend it. However, we don't want yo
          to overdo it and spam the readers with updated book notifications
          so we currently only allow one update per book per day. If you
          find that you need to make additional changes in the same day,
          save it to your drafts and update it the following day. We recommend
          aggregating your changes to provide readers with exciting updates.
        </div>
      </div>
      <div className="question-group">
        <div className="question">
          How does book versioning work? Can I roll my book back to a previous
          version?
        </div>
        <div className="answer">
          Books are versioned automatically with "major" and "minor" updates.
          When you first publish your book, the version starts at 1.0. When
          you make an update, you will be asked if this is a "Major" or
          "Minor" update. A minor update will bump your version by +0.1 and
          a major update will bump your version by +1.0. Once you publish an
          update, it will forever be available to readers. Because of this,
          if you'd like to "roll back" to a previous version, you would need
          to publish a new update with the contents of the version you prefer
          to be the current version.
        </div>
      </div>
    </div>
  );

  render() {
    return (
      <div className="faq-view-container">
        <div className="faq-header">
          <span onClick={() => this.setState({ faqState: FaqPage.READER_FAQ })}>
            Reader Click Me {this.props.test}
          </span>
          <span onClick={() => this.setState({ faqState: FaqPage.AUTHOR_FAQ })}>
            Author Click Me
          </span>
        </div>
        <div className="faq-body">
          {this.state.faqState === FaqPage.READER_FAQ ?
            this.renderReaderFaq() : this.renderAuthorFaq()}
        </div>
      </div>
    );
  }

}

export default FaqPage;
