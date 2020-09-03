import {createElement, Component, render} from './toy-react';

class MyComponent extends Component {
    render() {
        return <div>
            <h1>my component</h1>
            {this.children}
        </div>
    }
}

render(<MyComponent id="a" class="c">
    <div>abc</div>
    <div>toy</div>
    <div>react
        <div>child</div>
    </div>
</MyComponent>, document.body);

// for (let i of [1,2,3]) {
//     console.log(i);
// }

// let a = <div id="a" class="c" />