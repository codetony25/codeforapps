import React from 'react';
import { words } from 'underscore.string';

class EverLibEditorStats extends React.Component {

  constructor(props) {
    super(props);
  }

  getWordsInBook = () => {
    const { chapterList, chapters } = this.props.book.draft;
    let wordsInBook = 0;
    chapterList.forEach((key) =>
      wordsInBook += words(chapters[key].text).length);
    return wordsInBook;
  };

  getPagesInBook = () =>
    ~~(this.getWordsInBook() / 250) + 1;

  getWordsInChapter = () =>
    words(
      this.props.book.draft.chapters[this.props.selectedChapter].text
    ).length;

  render() {
    console.log('Rendering BookEditStats');
    return (this.props.settings.showBookStats) ?
      (<div className="book-edit-stats">
        <span>Words in Chapter: {this.getWordsInChapter()}</span>
        <span>Words in Book: {this.getWordsInBook()}</span>
        <span>Pages in Book: {this.getPagesInBook()}</span>
        <p>{this.props.settings.lastSaved}</p>
      </div>) : null;
  }

}

export default EverLibEditorStats;
