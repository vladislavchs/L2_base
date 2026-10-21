1
function hasTwoCubeSums(n) {
let count = 0;
const max = Math.floor(Math.cbrt(n));
for (let a = 1; a <= max; a++) {
for (let b = a + 1; b <= max; b++) {
const s = aaa + bbb;
if (s === n) count++;
if (s >= n) break;
}
}
return count >= 2;
}
2
function ipv4Parser(ip, mask) {
const ipParts = ip.split('.').map(Number);
const maskParts = mask.split('.').map(Number);
const network = ipParts.map((v, i) => v & maskParts[i]).join('.');
const host = ipParts.map((v, i) => v & ~maskParts[i] & 255).join('.');
return [network, host];
}
3
function whatCentury(year) {
const century = Math.ceil(parseInt(year, 10) / 100);
let suffix = 'th';
if (century % 100 < 11 || century % 100 > 13) {
if (century % 10 === 1) suffix = 'st';
else if (century % 10 === 2) suffix = 'nd';
else if (century % 10 === 3) suffix = 'rd';
}
return century + suffix;
}
4
function findMissing(list) {
const step = (list[list.length - 1] - list[0]) / list.length;
for (let i = 1; i < list.length; i++) {
if (list[i] - list[i - 1] !== step) {
return list[i - 1] + step;
}
}
}
5
function primeFactors(n) {
let result = '';
for (let i = 2; i * i <= n; i++) {
let count = 0;
while (n % i === 0) { n /= i; count++; }
if (count === 1) result += (${i});
else if (count > 1) result += (${i}**${count});
}
if (n > 1) result += (${n});
return result;
}
6
function toWeirdCase(string) {
return string.split(' ')
.map(word => word.split('')
.map((ch, i) => i % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase())
.join(''))
.join(' ');
}
7
function wave(str) {
const result = [];
for (let i = 0; i < str.length; i++) {
if (str[i] === ' ') continue;
result.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1));
}
return result;
}
8
function expandedForm(num) {
return String(num).split('').map((digit, i, arr) =>
digit !== '0' ? digit + '0'.repeat(arr.length - i - 1) : null
).filter(Boolean).join(' + ');
}
9
function solution(str) {
const result = [];
for (let i = 0; i < str.length; i += 2) {
result.push(str.slice(i, i + 2).padEnd(2, '_'));
}
return result;
}
10
function bingo(ticket, win) {
const miniWins = ticket.filter(([str, code]) =>
[...str].some(ch => ch.charCodeAt(0) === code)
).length;
return miniWins >= win ? 'Winner!' : 'Loser!';
}
11
function domainName(url) {
return url
.replace(/^https?:///, '')
.replace(/^www./, '')
.split('.')[0];
}
12
function nthLongest(arr, n) {
return [...arr].sort((a, b) => b.length - a.length)[n - 1];
}
13
function hexStringToRGB(hex) {
return {
r: parseInt(hex.slice(1, 3), 16),
g: parseInt(hex.slice(3, 5), 16),
b: parseInt(hex.slice(5, 7), 16)
};
}
14
function isCircleSorted(arr) {
let drops = 0;
for (let i = 0; i < arr.length; i++) {
if (arr[i] > arr[(i + 1) % arr.length]) drops++;
}
return drops <= 1;
}
15
function howManyTimes(time1, time2) {
const parse = s => {
const [day, clock] = s.split(' ');
const [y, m, d] = day.split('-').map(Number);
const [h, min, sec] = clock.split(':').map(Number);
return Date.UTC(y, m - 1, d, h, min, sec);
};
const t1 = parse(time1), t2 = parse(time2);
const HOUR = 3600 * 1000, SEC = 1000;
let total = 0;
const add = (start, durationSec) => {
const a = Math.max(start, t1), b = Math.min(start + durationSec * SEC, t2);
if (b > a) total += (b - a) / SEC;
};
for (let t = Math.ceil(t1 / HOUR) * HOUR; t < t2; t += HOUR) {
const h12 = new Date(t).getUTCHours() % 12 || 12;
add(t, h12);
}
for (let t = Math.ceil((t1 - 30 * 60 * SEC) / HOUR) * HOUR + 30 * 60 * SEC;
t < t2; t += HOUR) {
add(t, 1);
}
return total;
}
16
Array.prototype.square  = function () { return this.map(x => x * x); };
Array.prototype.cube    = function () { return this.map(x => x ** 3); };
Array.prototype.sum     = function () { return this.reduce((a, b) => a + b, 0); };
Array.prototype.average = function () { return this.sum() / this.length; };
Array.prototype.even    = function () { return this.filter(x => x % 2 === 0); };
Array.prototype.odd     = function () { return this.filter(x => x % 2 !== 0); };
