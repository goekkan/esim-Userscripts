// ==UserScript==
// @name         eSim Auto-Hit
// @namespace    eSim-Auto-Hit
// @version      0.1
// @description  Let the Script hit your Regens!
// @author       goekkan
// @include      https://*.e-sim.org/battle.html?id=*
// @icon         https://cdn.discordapp.com/icons/316566483021070356/cfffdee309ec53078e9a9698ec4eef42.png?size=256
// @grant        none
// ==/UserScript==

(function () {
  // create and place Button, then wait for button press and call main func
  const facebookButton = document.querySelector('.icon-facebook').parentNode
  facebookButton.onclick = createTab
})()

function createTab () {
  const newTab = window.open('', 'eSim Auto - Hit')
  newTab.focus()

  // Find out the 2 sides
  const defender = document.getElementsByClassName('alliesList leftList fightFont')[0].innerText
  const attacker = document.getElementsByClassName('alliesList rightList fightFont')[0].innerText

  // Display the 2 sides
  const headerText = newTab.document.createElement('h1')
  headerText.innerText = defender + ' - ' + attacker
  newTab.document.body.append(headerText)

  // Find out if RW or DOW
  const attackerBerserkBtn = document.getElementById('fightButtonBerserk2')
  if (attackerBerserkBtn !== null) {
    const rwText = newTab.document.createElement('div')
    rwText.className = 'rw-text'
    rwText.innerText = 'The Battle is a RW, please pick your Side.'
    newTab.document.body.append(rwText)

    // Create input to pick side
    const defenderDiv = newTab.document.createElement('BUTTON')
    defenderDiv.innerText = defender
    defenderDiv.onclick = clickedDefButton

    const attackerDiv = newTab.document.createElement('Button')
    attackerDiv.innerText = attacker
    attackerDiv.onclick = clickedAttButton

    newTab.document.body.append(defenderDiv, attackerDiv)
  } else {
    const dowText = newTab.document.createElement('p')
    dowText.innerText = 'The Battle is a Dow. You will hit for: '
    newTab.document.body.append(dowText)
  }

  console.log(attackerBerserkBtn)
  // CSS
  const styles = 'body {background-color: #333333;text-align: center;} h1 {color: #FFFFFF;} rwText {color:red} .rw-text{color: red;margin-bottom:5px;}'
  const styleSheet = newTab.document.createElement('style')
  styleSheet.innerText = styles
  newTab.document.head.appendChild(styleSheet)
}

function clickedDefButton () {
  console.log('clickedDefButton')
}
function clickedAttButton () {
  console.log('clickedAttButton')
}
