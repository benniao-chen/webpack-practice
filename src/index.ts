import * as _ from 'lodash';
import './style.css';
import printMe from './print'; 

export class test {
    constructor() {

    }
    
    component(): Element {
        var element = document.createElement('div');
        var btn = document.createElement('button');

        // Lodash, now imported by this script
        element.innerHTML = _.join(['Hello', 'webpack'], ' ');
        element.classList.add('hello');

        btn.innerHTML = 'Click me and check console!';
        btn.onclick = printMe;

        element.appendChild(btn);

        return element;
    }
}

document.body.appendChild(new test().component());