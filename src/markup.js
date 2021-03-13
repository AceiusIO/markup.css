// Markup.css NE/XT | github.com/AceiusIO/markup.css | (c) 2021 \\

// Basic Text

var m_text = Vue.component('m-text', {
    template: `<p></p>`,
    name: 'm-text'
});

var m_bold = Vue.component('m-bold', {
    template: `<strong class="mk-bolder"></strong>`,
    name: 'm-bold'
});

var m_itallic = Vue.component('m-itallic', {
    template: `<em class="mk-itallic"></em>`,
    name: 'm-itallic'
});

var m_underline = Vue.component('m-underline', {
    template: `<span class="mk-underline"></span>`,
    name: 'm-underline'
});

// Script
var mk_script = Vue.component('mk-script', {
    props: ['type'],
    template: `<span :class="'mk-script ' + type"></span>`,
    name: 'mk-script'
});

var mk_size = Vue.component('mk-size', {
    props: ['scale'],
    template: `<span :class="'mk-' + scale"></span>`,
    name: 'mk-size'
});

var m_exp = Vue.component('m-exp', {
    template: `<span class="mk-script exponent"></span>`,
    name: 'm-exp'
});

var m_sub = Vue.component('m-sub', {
    template: `<span class="mk-script sub"></span>`,
    name: 'm-sub'
});

var m_super = Vue.component('m-super', {
    template: `<span class="mk-script super"></span>`,
    name: 'm-super'
});

var m_small = Vue.component('m-small', {
    template: `<span class="mk-small"></span>`,
    name: 'm-small'
});

var m_smaller = Vue.component('m-smaller', {
    template: `<span class="mk-smaller"></span>`,
    name: 'm-smaller'
});

var m_large = Vue.component('m-large', {
    template: `<span class="mk-large"></span>`,
    name: 'm-large'
});

var m_larger = Vue.component('m-larger', {
    template: `<span class="mk-larger"></span>`,
    name: 'm-larger'
});

// Highlights

var mk_highlight = Vue.component('mk-highlight', {
    props: ['color'],
    template: `<span :class="'mk-highlight ' + color"></span>`,
    name: 'mk-highlight'
});

var m_highlight_r = Vue.component('m-high-r', {
    template: `<mk-highlight color="red"></mk-highlight>`,
    name: 'm-high-r'
});

var m_highlight_o = Vue.component('m-high-o', {
    template: `<mk-highlight color="orange"></mk-highlight>`,
    name: 'm-high-o'
});

var m_highlight_y = Vue.component('m-high-y', {
    template: `<mk-highlight color="yellow"></mk-highlight>`,
    name: 'm-high-y'
});

var m_highlight_g = Vue.component('m-high-g', {
    template: `<mk-highlight color="green"></mk-highlight>`,
    name: 'm-high-g'
});

var m_highlight_b = Vue.component('m-high-b', {
    template: `<mk-highlight color="blue"></mk-highlight>`,
    name: 'm-high-b'
});

var m_highlight_p = Vue.component('m-high-p', {
    template: `<mk-highlight color="purple"></mk-highlight>`,
    name: 'm-high-p'
});

var m_highlight_round = Vue.component('m-high-round', {
    template: `<span class="mk-rounded"></span>`,
    name: 'm-high-round'
});

//Text Coloring

var m_color_r = Vue.component('m-color-r', {
    template: `<span class="mk-color red"></span>`,
    name: 'm-color-r'
});

var m_color_o = Vue.component('m-color-o', {
    template: `<span class="mk-color orange"></span>`,
    name: 'm-color-o'
});

var m_color_y = Vue.component('m-color-y', {
    template: `<span class="mk-color yellow"></span>`,
    name: 'm-color-y'
});

var m_color_g = Vue.component('m-color-g', {
    template: `<span class="mk-color green"></span>`,
    name: 'm-color-g'
});

var m_color_b = Vue.component('m-color-b', {
    template: `<span class="mk-color blue"></span>`,
    name: 'm-color-b'
});

var m_color_p = Vue.component('m-color-p', {
    template: `<span class="mk-color purple"></span>`,
    name: 'm-color-p'
});