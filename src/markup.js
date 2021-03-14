// Markup.css NE/XT | github.com/AceiusIO/markup.css | (c) 2021 \\

// Basic Text

var m_text = Vue.component('m-text', {
    template: `<p><slot></slot></p>`,
    name: 'm-text'
});

var m_bold = Vue.component('m-bold', {
    template: `<strong class="mk-bolder"><slot></slot></strong>`,
    name: 'm-bold'
});

var m_itallic = Vue.component('m-itallic', {
    template: `<em class="mk-itallic"><slot></slot></em>`,
    name: 'm-itallic'
});

var m_underline = Vue.component('m-underline', {
    template: `<span class="mk-underline"><slot></slot></span>`,
    name: 'm-underline'
});

// Script
var mk_script = Vue.component('mk-script', {
    props: ['type'],
    template: `<span :class="'mk-script ' + type"><slot></slot></span>`,
    name: 'mk-script'
});

var mk_size = Vue.component('mk-size', {
    props: ['scale'],
    template: `<span :class="'mk-' + scale"><slot></slot></span>`,
    name: 'mk-size'
});

var m_exp = Vue.component('m-exp', {
    template: `<span class="mk-script exponent"><slot></slot></span>`,
    name: 'm-exp'
});

var m_sub = Vue.component('m-sub', {
    template: `<span class="mk-script sub"><slot></slot></span>`,
    name: 'm-sub'
});

var m_super = Vue.component('m-super', {
    template: `<span class="mk-script super"><slot></slot></span>`,
    name: 'm-super'
});

var m_small = Vue.component('m-small', {
    template: `<span class="mk-small"><slot></slot></span>`,
    name: 'm-small'
});

var m_smaller = Vue.component('m-smaller', {
    template: `<span class="mk-smaller"><slot></slot></span>`,
    name: 'm-smaller'
});

var m_title = Vue.component('m-title', {
    template: `<span class="mk-title">
        <h1>
            <slot></slot>
        </h1>
    </span>`,
    name: 'm-title'
});

var m_subtitle = Vue.component('m-subtitle', {
    template: `<span class="mk-title">
        <h3>
            <slot></slot>
        </h3>
    </span>`,
    name: 'm-subtitle'
});

var m_large = Vue.component('m-large', {
    template: `<span class="mk-large"><slot></slot></span>`,
    name: 'm-large'
});

var m_larger = Vue.component('m-larger', {
    template: `<span class="mk-larger"><slot></slot></span>`,
    name: 'm-larger'
});

// Highlights

var mk_highlight = Vue.component('mk-highlight', {
    props: ['color'],
    template: `<span :class="'mk-highlight ' + color"><slot></slot></span>`,
    name: 'mk-highlight'
});

var m_highlight_r = Vue.component('m-high-r', {
    template: `<mk-highlight color="red"><slot></slot></mk-highlight>`,
    name: 'm-high-r'
});

var m_highlight_o = Vue.component('m-high-o', {
    template: `<mk-highlight color="orange"><slot></slot></mk-highlight>`,
    name: 'm-high-o'
});

var m_highlight_y = Vue.component('m-high-y', {
    template: `<mk-highlight color="yellow"><slot></slot></mk-highlight>`,
    name: 'm-high-y'
});

var m_highlight_g = Vue.component('m-high-g', {
    template: `<mk-highlight color="green"><slot></slot></mk-highlight>`,
    name: 'm-high-g'
});

var m_highlight_b = Vue.component('m-high-b', {
    template: `<mk-highlight color="blue"><slot></slot></mk-highlight>`,
    name: 'm-high-b'
});

var m_highlight_p = Vue.component('m-high-p', {
    template: `<mk-highlight color="purple"><slot></slot></mk-highlight>`,
    name: 'm-high-p'
});

var m_highlight_round = Vue.component('m-high-round', {
    template: `<span class="mk-rounded"><slot></slot></span>`,
    name: 'm-high-round'
});

//Text Coloring

var m_color_r = Vue.component('m-color-r', {
    template: `<span class="mk-color red"><slot></slot></span>`,
    name: 'm-color-r'
});

var m_color_o = Vue.component('m-color-o', {
    template: `<span class="mk-color orange"><slot></slot></span>`,
    name: 'm-color-o'
});

var m_color_y = Vue.component('m-color-y', {
    template: `<span class="mk-color yellow"><slot></slot></span>`,
    name: 'm-color-y'
});

var m_color_g = Vue.component('m-color-g', {
    template: `<span class="mk-color green"><slot></slot></span>`,
    name: 'm-color-g'
});

var m_color_b = Vue.component('m-color-b', {
    template: `<span class="mk-color blue"><slot></slot></span>`,
    name: 'm-color-b'
});

var m_color_p = Vue.component('m-color-p', {
    template: `<span class="mk-color purple"><slot></slot></span>`,
    name: 'm-color-p'
});

//Interactive

var m_button = Vue.component('m-btn', {
    template: `<button :onclick="onclick" class="mk-button" :style="'background-color: ' + color + ';'">
        <slot />
    </button>`,
    props: ['color', 'onclick'],
    name: 'm-btn'
});

//Divs

var m_header = Vue.component('m-header', {
    template: `<header class=""></header>`,
    props: ['color', 'onclick'],
    name: 'm-header'
});

var app = new Vue({
    el: '#m-app',
    components: {
        
    }
});