# 🌪Tachyons2Tailwind



The fact that Tailwind overtook Tachyons about a year+ ago in npm trends, that it's in active development and that it supports a broader set of media queries, means maybe it is time switch from Tachyons to Tailwind?

This is a repository dedicated to making the transition from <b>Tachyons2Tailwind</b> a breeze! 🕶

For more online resources, check out https://pandoras-box.co.za/tachyons2tailwind/

⛔ Work in progress! ⛔

<h3>Dependencies</h3>

Requires Node and some old Tachyons for target practice.

<h3>Useful information</h3>

<ul>
  <li>Tachyons and Tailwind use different media queries (px vs em). Some manual TCL will be required for those medium media queries in that Tachyons defines the range from start to end while Tailwind relies on a min-width only.
    <table>
  <tr>
    <th>Size</th>
    <th>Tachyons</th>
    <th>Tailwind</th>
  </tr>
  <tr>
    <td>Small</td>
    <td>@media screen and (min-width:30em)</td>
    <td>@media (min-width:640px)</td>
  </tr>
  <tr>
    <td>Medium</td>
    <td>@media screen and (min-width:30em) and (max-width:60em)</td>
    <td>@media (min-width:768px)</td>
  </tr>
  <tr>
    <td>Large</td>
    <td>@media screen and (min-width:60em)</td>
    <td>@media (min-width:1024px)</td>
  </tr>
</table>
  </li>
  <li>In each framework, some elements have been styled directly. These elements will change accordingly, even without assigned classes. (This is particularly noteworthy when it comes to images.)</li>
  <li>A cool <a href="https://nerdcave.com/tailwind-cheat-sheet">Tailwind Cheatsheet</a></li>
  <li>You can use <code>https://unpkg.com/tailwindcss/dist/tailwind.min.css</code> in your header until Tailwind has been configured. Makes testing this much easier!</li>
  <li>There are some Tachyons classes which are not supported by Tailwind. These have been commented in the script. (Coming soon: extra option to remove unsupported Tachyons or to download legacy stylesheet that supports only these classes.)</li>
</ul>

<h3>Running the script</h3>

In command line type <code>$ node /path/to/tachyons2tailwind.js /path/to/target/dir</code>
