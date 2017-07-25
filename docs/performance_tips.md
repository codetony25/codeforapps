

1. Tips can be found here: http://mobxjs.github.io/mobx/best/react-performance.html

2. Use many small components
  - @observer components will track all values they use and re-render if any of them changes. So the smaller your components are, the smaller the change they have to re-render; it means that more parts of your user interface have the possibility to render independently of each other.
  
3. Render lists in dedicated components

example:
```jsx harmony
// BAD
@observer class MyComponent extends Component {
    render() {
        const {todos, user} = this.props;
        return (<div>
            {user.name}
            <ul>
                {todos.map(todo => <TodoView todo={todo} key={todo.id} />)}
            </ul>
        </div>)
    }
}


// GOOD
@observer class MyComponent extends Component {
    render() {
        const {todos, user} = this.props;
        return (<div>
            {user.name}
            <TodosView todos={todos} />
        </div>)
    }
}

@observer class TodosView extends Component {
    render() {
        const {todos} = this.props;
        return <ul>
            {todos.map(todo => <TodoView todo={todo} key={todo.id} />)}
        </ul>)
    }
}
```

4. Don't use array indexes as keys

5. Dereference values lately

example:
```jsx harmony
// GOOD
    Fast:
    
    <DisplayName person={person} />
// BAD
    Slower:
    
    <DisplayName name={person.name} />.
```

6. Bind functions early

example:

```jsx harmony
// BAD
    render() {
        return <MyWidget onClick={() => { alert('hi') }} />
    }

// GOOD
    render() {
        return <MyWidget onClick={this.handleClick} />
    }
    
    handleClick = () => {
        alert('hi')
    }
```