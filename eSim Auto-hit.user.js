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

// WORK IN PROGRESS; SCRIPT NOT FINISHED YET

(function () {
  // create and place Button, then wait for button press and call main func
  if (document.body.innerHTML.search(" You can't fight in this battle from your current location.") === -1) {
    const facebookButton = document.querySelector('.icon-facebook').parentNode
    facebookButton.onclick = createTab
  }
})()

// Global variable
let newTab
const countriesList = [{ Code: 'AF', Name: 'Afghanistan' }, { Code: 'AX', Name: 'Åland Islands' }, { Code: 'AL', Name: 'Albania' }, { Code: 'DZ', Name: 'Algeria' }, { Code: 'AS', Name: 'American Samoa' }, { Code: 'AD', Name: 'Andorra' }, { Code: 'AO', Name: 'Angola' }, { Code: 'AI', Name: 'Anguilla' }, { Code: 'AQ', Name: 'Antarctica' }, { Code: 'AG', Name: 'Antigua and Barbuda' }, { Code: 'AR', Name: 'Argentina' }, { Code: 'AM', Name: 'Armenia' }, { Code: 'AW', Name: 'Aruba' }, { Code: 'AU', Name: 'Australia' }, { Code: 'AT', Name: 'Austria' }, { Code: 'AZ', Name: 'Azerbaijan' }, { Code: 'BS', Name: 'Bahamas' }, { Code: 'BH', Name: 'Bahrain' }, { Code: 'BD', Name: 'Bangladesh' }, { Code: 'BB', Name: 'Barbados' }, { Code: 'BY', Name: 'Belarus' }, { Code: 'BE', Name: 'Belgium' }, { Code: 'BZ', Name: 'Belize' }, { Code: 'BJ', Name: 'Benin' }, { Code: 'BM', Name: 'Bermuda' }, { Code: 'BT', Name: 'Bhutan' }, { Code: 'BO', Name: 'Bolivia, Plurinational State of' }, { Code: 'BQ', Name: 'Bonaire, Sint Eustatius and Saba' }, { Code: 'BA', Name: 'Bosnia and Herzegovina' }, { Code: 'BW', Name: 'Botswana' }, { Code: 'BV', Name: 'Bouvet Island' }, { Code: 'BR', Name: 'Brazil' }, { Code: 'IO', Name: 'British Indian Ocean Territory' }, { Code: 'BN', Name: 'Brunei Darussalam' }, { Code: 'BG', Name: 'Bulgaria' }, { Code: 'BF', Name: 'Burkina Faso' }, { Code: 'BI', Name: 'Burundi' }, { Code: 'KH', Name: 'Cambodia' }, { Code: 'CM', Name: 'Cameroon' }, { Code: 'CA', Name: 'Canada' }, { Code: 'CV', Name: 'Cape Verde' }, { Code: 'KY', Name: 'Cayman Islands' }, { Code: 'CF', Name: 'Central African Republic' }, { Code: 'TD', Name: 'Chad' }, { Code: 'CL', Name: 'Chile' }, { Code: 'CN', Name: 'China' }, { Code: 'CX', Name: 'Christmas Island' }, { Code: 'CC', Name: 'Cocos (Keeling) Islands' }, { Code: 'CO', Name: 'Colombia' }, { Code: 'KM', Name: 'Comoros' }, { Code: 'CG', Name: 'Congo' }, { Code: 'CD', Name: 'Congo, the Democratic Republic of the' }, { Code: 'CK', Name: 'Cook Islands' }, { Code: 'CR', Name: 'Costa Rica' }, { Code: 'CI', Name: "Côte d'Ivoire" }, { Code: 'HR', Name: 'Croatia' }, { Code: 'CU', Name: 'Cuba' }, { Code: 'CW', Name: 'Curaçao' }, { Code: 'CY', Name: 'Cyprus' }, { Code: 'CZ', Name: 'Czech Republic' }, { Code: 'DK', Name: 'Denmark' }, { Code: 'DJ', Name: 'Djibouti' }, { Code: 'DM', Name: 'Dominica' }, { Code: 'DO', Name: 'Dominican Republic' }, { Code: 'EC', Name: 'Ecuador' }, { Code: 'EG', Name: 'Egypt' }, { Code: 'SV', Name: 'El Salvador' }, { Code: 'GQ', Name: 'Equatorial Guinea' }, { Code: 'ER', Name: 'Eritrea' }, { Code: 'EE', Name: 'Estonia' }, { Code: 'ET', Name: 'Ethiopia' }, { Code: 'FK', Name: 'Falkland Islands (Malvinas)' }, { Code: 'FO', Name: 'Faroe Islands' }, { Code: 'FJ', Name: 'Fiji' }, { Code: 'FI', Name: 'Finland' }, { Code: 'FR', Name: 'France' }, { Code: 'GF', Name: 'French Guiana' }, { Code: 'PF', Name: 'French Polynesia' }, { Code: 'TF', Name: 'French Southern Territories' }, { Code: 'GA', Name: 'Gabon' }, { Code: 'GM', Name: 'Gambia' }, { Code: 'GE', Name: 'Georgia' }, { Code: 'DE', Name: 'Germany' }, { Code: 'GH', Name: 'Ghana' }, { Code: 'GI', Name: 'Gibraltar' }, { Code: 'GR', Name: 'Greece' }, { Code: 'GL', Name: 'Greenland' }, { Code: 'GD', Name: 'Grenada' }, { Code: 'GP', Name: 'Guadeloupe' }, { Code: 'GU', Name: 'Guam' }, { Code: 'GT', Name: 'Guatemala' }, { Code: 'GG', Name: 'Guernsey' }, { Code: 'GN', Name: 'Guinea' }, { Code: 'GW', Name: 'Guinea-Bissau' }, { Code: 'GY', Name: 'Guyana' }, { Code: 'HT', Name: 'Haiti' }, { Code: 'HM', Name: 'Heard Island and McDonald Islands' }, { Code: 'VA', Name: 'Holy See (Vatican City State)' }, { Code: 'HN', Name: 'Honduras' }, { Code: 'HK', Name: 'Hong Kong' }, { Code: 'HU', Name: 'Hungary' }, { Code: 'IS', Name: 'Iceland' }, { Code: 'IN', Name: 'India' }, { Code: 'ID', Name: 'Indonesia' }, { Code: 'IR', Name: 'Iran, Islamic Republic of' }, { Code: 'IQ', Name: 'Iraq' }, { Code: 'IE', Name: 'Ireland' }, { Code: 'IM', Name: 'Isle of Man' }, { Code: 'IL', Name: 'Israel' }, { Code: 'IT', Name: 'Italy' }, { Code: 'JM', Name: 'Jamaica' }, { Code: 'JP', Name: 'Japan' }, { Code: 'JE', Name: 'Jersey' }, { Code: 'JO', Name: 'Jordan' }, { Code: 'KZ', Name: 'Kazakhstan' }, { Code: 'KE', Name: 'Kenya' }, { Code: 'KI', Name: 'Kiribati' }, { Code: 'KP', Name: "Korea, Democratic People's Republic of" }, { Code: 'KR', Name: 'Korea, Republic of' }, { Code: 'KW', Name: 'Kuwait' }, { Code: 'KG', Name: 'Kyrgyzstan' }, { Code: 'LA', Name: "Lao People's Democratic Republic" }, { Code: 'LV', Name: 'Latvia' }, { Code: 'LB', Name: 'Lebanon' }, { Code: 'LS', Name: 'Lesotho' }, { Code: 'LR', Name: 'Liberia' }, { Code: 'LY', Name: 'Libya' }, { Code: 'LI', Name: 'Liechtenstein' }, { Code: 'LT', Name: 'Lithuania' }, { Code: 'LU', Name: 'Luxembourg' }, { Code: 'MO', Name: 'Macao' }, { Code: 'MK', Name: 'Macedonia, the Former Yugoslav Republic of' }, { Code: 'MG', Name: 'Madagascar' }, { Code: 'MW', Name: 'Malawi' }, { Code: 'MY', Name: 'Malaysia' }, { Code: 'MV', Name: 'Maldives' }, { Code: 'ML', Name: 'Mali' }, { Code: 'MT', Name: 'Malta' }, { Code: 'MH', Name: 'Marshall Islands' }, { Code: 'MQ', Name: 'Martinique' }, { Code: 'MR', Name: 'Mauritania' }, { Code: 'MU', Name: 'Mauritius' }, { Code: 'YT', Name: 'Mayotte' }, { Code: 'MX', Name: 'Mexico' }, { Code: 'FM', Name: 'Micronesia, Federated States of' }, { Code: 'MD', Name: 'Moldova, Republic of' }, { Code: 'MC', Name: 'Monaco' }, { Code: 'MN', Name: 'Mongolia' }, { Code: 'ME', Name: 'Montenegro' }, { Code: 'MS', Name: 'Montserrat' }, { Code: 'MA', Name: 'Morocco' }, { Code: 'MZ', Name: 'Mozambique' }, { Code: 'MM', Name: 'Myanmar' }, { Code: 'NA', Name: 'Namibia' }, { Code: 'NR', Name: 'Nauru' }, { Code: 'NP', Name: 'Nepal' }, { Code: 'NL', Name: 'Netherlands' }, { Code: 'NC', Name: 'New Caledonia' }, { Code: 'NZ', Name: 'New Zealand' }, { Code: 'NI', Name: 'Nicaragua' }, { Code: 'NE', Name: 'Niger' }, { Code: 'NG', Name: 'Nigeria' }, { Code: 'NU', Name: 'Niue' }, { Code: 'NF', Name: 'Norfolk Island' }, { Code: 'MP', Name: 'Northern Mariana Islands' }, { Code: 'NO', Name: 'Norway' }, { Code: 'OM', Name: 'Oman' }, { Code: 'PK', Name: 'Pakistan' }, { Code: 'PW', Name: 'Palau' }, { Code: 'PS', Name: 'Palestine, State of' }, { Code: 'PA', Name: 'Panama' }, { Code: 'PG', Name: 'Papua New Guinea' }, { Code: 'PY', Name: 'Paraguay' }, { Code: 'PE', Name: 'Peru' }, { Code: 'PH', Name: 'Philippines' }, { Code: 'PN', Name: 'Pitcairn' }, { Code: 'PL', Name: 'Poland' }, { Code: 'PT', Name: 'Portugal' }, { Code: 'PR', Name: 'Puerto Rico' }, { Code: 'QA', Name: 'Qatar' }, { Code: 'RE', Name: 'Réunion' }, { Code: 'RO', Name: 'Romania' }, { Code: 'RU', Name: 'Russian Federation' }, { Code: 'RW', Name: 'Rwanda' }, { Code: 'BL', Name: 'Saint Barthélemy' }, { Code: 'SH', Name: 'Saint Helena, Ascension and Tristan da Cunha' }, { Code: 'KN', Name: 'Saint Kitts and Nevis' }, { Code: 'LC', Name: 'Saint Lucia' }, { Code: 'MF', Name: 'Saint Martin (French part)' }, { Code: 'PM', Name: 'Saint Pierre and Miquelon' }, { Code: 'VC', Name: 'Saint Vincent and the Grenadines' }, { Code: 'WS', Name: 'Samoa' }, { Code: 'SM', Name: 'San Marino' }, { Code: 'ST', Name: 'Sao Tome and Principe' }, { Code: 'SA', Name: 'Saudi Arabia' }, { Code: 'SN', Name: 'Senegal' }, { Code: 'RS', Name: 'Serbia' }, { Code: 'SC', Name: 'Seychelles' }, { Code: 'SL', Name: 'Sierra Leone' }, { Code: 'SG', Name: 'Singapore' }, { Code: 'SX', Name: 'Sint Maarten (Dutch part)' }, { Code: 'SK', Name: 'Slovakia' }, { Code: 'SI', Name: 'Slovenia' }, { Code: 'SB', Name: 'Solomon Islands' }, { Code: 'SO', Name: 'Somalia' }, { Code: 'ZA', Name: 'South Africa' }, { Code: 'GS', Name: 'South Georgia and the South Sandwich Islands' }, { Code: 'SS', Name: 'South Sudan' }, { Code: 'ES', Name: 'Spain' }, { Code: 'LK', Name: 'Sri Lanka' }, { Code: 'SD', Name: 'Sudan' }, { Code: 'SR', Name: 'Suriname' }, { Code: 'SJ', Name: 'Svalbard and Jan Mayen' }, { Code: 'SZ', Name: 'Swaziland' }, { Code: 'SE', Name: 'Sweden' }, { Code: 'CH', Name: 'Switzerland' }, { Code: 'SY', Name: 'Syrian Arab Republic' }, { Code: 'TW', Name: 'Taiwan, Province of China' }, { Code: 'TJ', Name: 'Tajikistan' }, { Code: 'TZ', Name: 'Tanzania, United Republic of' }, { Code: 'TH', Name: 'Thailand' }, { Code: 'TL', Name: 'Timor-Leste' }, { Code: 'TG', Name: 'Togo' }, { Code: 'TK', Name: 'Tokelau' }, { Code: 'TO', Name: 'Tonga' }, { Code: 'TT', Name: 'Trinidad and Tobago' }, { Code: 'TN', Name: 'Tunisia' }, { Code: 'TR', Name: 'Turkey' }, { Code: 'TM', Name: 'Turkmenistan' }, { Code: 'TC', Name: 'Turks and Caicos Islands' }, { Code: 'TV', Name: 'Tuvalu' }, { Code: 'UG', Name: 'Uganda' }, { Code: 'UA', Name: 'Ukraine' }, { Code: 'AE', Name: 'United Arab Emirates' }, { Code: 'GB', Name: 'United Kingdom' }, { Code: 'US', Name: 'United States' }, { Code: 'UM', Name: 'United States Minor Outlying Islands' }, { Code: 'UY', Name: 'Uruguay' }, { Code: 'UZ', Name: 'Uzbekistan' }, { Code: 'VU', Name: 'Vanuatu' }, { Code: 'VE', Name: 'Venezuela, Bolivarian Republic of' }, { Code: 'VN', Name: 'Viet Nam' }, { Code: 'VG', Name: 'Virgin Islands, British' }, { Code: 'VI', Name: 'Virgin Islands, U.S.' }, { Code: 'WF', Name: 'Wallis and Futuna' }, { Code: 'EH', Name: 'Western Sahara' }, { Code: 'YE', Name: 'Yemen' }, { Code: 'ZM', Name: 'Zambia' }, { Code: 'ZW', Name: 'Zimbabwe' }]
const selectedStyle = 'border: 5px solid #555;'
let selectedFoodQuality = 0
let selectedGiftQuality = 0
let selectedWeaponQuality = 0

function createTab () {
  newTab = window.open('', 'eSim Auto - Hit')
  newTab.focus()

  // Find out the 2 sides
  const defender = document.getElementsByClassName('alliesList leftList fightFont')[0].innerText.trim()
  const attacker = document.getElementsByClassName('alliesList rightList fightFont')[0].innerText.trim()

  // Display the 2 sides
  const headerText = newTab.document.createElement('h1')
  headerText.innerText = defender + ' - ' + attacker
  newTab.document.body.append(headerText)

  const suppInfoDiv = newTab.document.createElement('div')
  const suppInfoText = newTab.document.createElement('p')
  suppInfoDiv.append(suppInfoText)
  suppInfoText.innerText = 'Please pick Food, Gift and Wep quality. Only pick Food/Gift if you want to consume them.'
  newTab.document.body.append(suppInfoDiv)

  addImages()

  // Find out if RW or DOW
  const attackerBerserkBtn = document.getElementById('fightButtonBerserk2')
  if (attackerBerserkBtn !== null) {
    const rwText = newTab.document.createElement('div')
    rwText.className = 'rw-text'
    rwText.innerText = 'The Battle is a RW, please pick your Side.'
    newTab.document.body.append(rwText)

    // Create input to pick side
    const defenderDiv = newTab.document.createElement('BUTTON')
    // defenderDiv.innerText = defender
    defenderDiv.id = 'btnDef'
    defenderDiv.onclick = clickedDefButton

    const attackerDiv = newTab.document.createElement('Button')
    // attackerDiv.innerText = attacker
    attackerDiv.id = 'btnAtk'
    attackerDiv.onclick = clickedAttButton

    newTab.document.body.append(defenderDiv, attackerDiv)
    newTab.document.body.append(document.createElement('hr'))
  } else {
    const dowText = newTab.document.createElement('p')
    dowText.innerText = 'The Battle is a Dow. You will hit for: '
    newTab.document.body.append(dowText)
  }

  console.log(attackerBerserkBtn)
  // CSS
  const styles = `body {background-color: #333333;text-align: center;} hr {color: #333333; width: 400px;} h1 {color: #FFFFFF;} rwText {color:red} .rw-text{color: red;margin-bottom:5px;}img {width: 64px; border-color: aliceblue;} #btnDef {background-image: url(${getCountrySVG(defender)}); background-repeat: no-repeat; height: 64px; width: 64px;} #btnAtk {background-image: url(${getCountrySVG(attacker)}); background-repeat: no-repeat; height: 64px; width: 64px;}`
  const styleSheet = newTab.document.createElement('style')
  styleSheet.innerText = styles
  newTab.document.head.appendChild(styleSheet)
}

function clickedDefButton () {
  console.log(document.getElementById('roundCountdown').innerText)
  console.log(selectedFoodQuality, selectedGiftQuality, selectedWeaponQuality)
}
function clickedAttButton () {
  console.log(selectedFoodQuality, selectedGiftQuality, selectedWeaponQuality)
}

function addImages () {
  const foodLinks = [
    {
      quality: 'q0',
      link: 'https://i.postimg.cc/gXbdWCjV/q0-food.png'
    },
    {
      quality: 'q1',
      link: 'https://i.postimg.cc/PCcT6pkF/q1-food.png'
    },
    {
      quality: 'q2',
      link: 'https://i.postimg.cc/PLwh0XXf/q2-food.png'
    },
    {
      quality: 'q3',
      link: 'https://i.ibb.co/tms3TFM/q3food.png'
    },
    {
      quality: 'q4',
      link: 'https://i.postimg.cc/Dmdf2wq8/q4-food.png'
    },
    {
      quality: 'q5',
      link: 'https://i.ibb.co/nMtqv65/q5food.png'
    }
  ]
  for (const item of foodLinks) {
    const foodElement = newTab.document.createElement('img')
    const productType = 'food'
    foodElement.src = item.link
    foodElement.alt = item.quality + '-' + productType
    foodElement.id = item.quality + '-' + productType
    foodElement.className = productType
    foodElement.addEventListener('click', function () { clickedOnImage('food', item.quality) })
    if (item.quality === 'q0') {
      foodElement.style = selectedStyle
    }
    newTab.document.body.append(foodElement)
  }

  newTab.document.body.append(document.createElement('hr'))

  const giftLinks = [
    {
      quality: 'q0',
      link: 'https://i.postimg.cc/Ln99hFTv/q0-gift.png'
    },
    {
      quality: 'q1',
      link: 'https://i.ibb.co/RbpyJvP/q1-gift.png'
    },
    {
      quality: 'q2',
      link: 'https://i.ibb.co/fGfY6fQ/q2-gift.png'
    },
    {
      quality: 'q3',
      link: 'https://i.ibb.co/8ML7yMw/q3-gift.png'
    },
    {
      quality: 'q4',
      link: 'https://i.ibb.co/fXG829M/q4-gift.png'
    },
    {
      quality: 'q5',
      link: 'https://i.ibb.co/0fCj2mL/q5-gift.png'
    }
  ]
  for (const item of giftLinks) {
    const giftElement = newTab.document.createElement('img')
    const productType = 'gift'
    giftElement.src = item.link
    giftElement.alt = item.quality + '-' + productType
    giftElement.id = item.quality + '-' + productType
    giftElement.className = productType
    giftElement.addEventListener('click', function () { clickedOnImage('gift', item.quality) })
    if (item.quality === 'q0') {
      giftElement.style = selectedStyle
    }
    newTab.document.body.append(giftElement)
  }

  newTab.document.body.append(document.createElement('hr'))

  const weaponLinks = [
    {
      quality: 'q0',
      link: 'https://i.postimg.cc/bsmztVVP/q0-wep.png'
    },
    {
      quality: 'q1',
      link: 'https://i.postimg.cc/hfxWJrvt/q1-wep.png'
    },
    {
      quality: 'q2',
      link: 'https://i.postimg.cc/zySs7Gnm/q2-png.png'
    },
    {
      quality: 'q3',
      link: 'https://i.postimg.cc/kVJkpPc2/q3-png.png'
    },
    {
      quality: 'q4',
      link: 'https://i.postimg.cc/mPsx7H1N/q4-wep.png'
    },
    {
      quality: 'q5',
      link: 'https://i.postimg.cc/94Lv3g8J/q5-wep.png'
    }
  ]
  for (const item of weaponLinks) {
    const wepElement = newTab.document.createElement('img')
    const productType = 'weapon'
    wepElement.src = item.link
    wepElement.alt = item.quality + '-' + productType
    wepElement.id = item.quality + '-' + productType
    wepElement.className = productType
    wepElement.addEventListener('click', function () { clickedOnImage('weapon', item.quality) })
    if (item.quality === 'q0') {
      wepElement.style = selectedStyle
    }
    newTab.document.body.append(wepElement)
  }
  newTab.document.body.append(document.createElement('hr'))
}

function getCountrySVG (countryName) {
  const countryData = countriesList.find(element => element.Name.toLowerCase() === countryName.toLowerCase())
  if (countryData !== undefined) {
    return `https://lipis.github.io/flag-icon-css/flags/1x1/${countryData.Code.toLowerCase()}.svg`
  } else {
    return false
  }
}

function clickedOnImage (type, quality) {
  const allProductTypeItems = newTab.document.body.getElementsByClassName(type)
  for (const item of allProductTypeItems) {
    if (item.id === quality + '-' + type) {
      item.style = selectedStyle
      if (type === 'food') {
        selectedFoodQuality = quality.replace('q', '')
      } else if (type === 'gift') {
        selectedGiftQuality = quality.replace('q', '')
      } else if (type === 'weapon') {
        selectedWeaponQuality = quality.replace('q', '')
      }
    } else {
      item.style = 'border: 0'
    }
  }
}

function checkHP () {
  return document.getElementById('actualHealth').innerText
}
