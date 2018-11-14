var assert = require('assert');

const range = (max) => Array.from({length: max}, (value, key) => key)
const rand_tag = (list) => list[Math.floor(Math.random()*list.length)]
const pass_percentage = (p) => Math.random() > (1- p/100)
const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const num_suites = 5
const num_cases = 10

const annotations = ["Alpha", "Beta", "Gamma", "Delta", "Theta"]
const pass = 80

range(num_suites).forEach((i) => {
    describe(`Test Suite #${i} >> `, () => {
        range(num_cases).forEach((j) => {
 
            it(`Test Case #${j} @${rand_tag(annotations)}`, async () => {
                await sleep(100)
                assert.ok(pass_percentage(pass));
            });
        });
    });
});

