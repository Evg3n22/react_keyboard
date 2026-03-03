import React from 'react';

type State = {
  lastKey: string;
  hasEntered: boolean;
};

export class App extends React.Component {
  state: Readonly<State> = {
    lastKey: '',
    hasEntered: false,
  };

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ lastKey: event.key, hasEntered: true });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {
    const { lastKey, hasEntered } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {hasEntered
            ? `The last pressed key is [${lastKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
