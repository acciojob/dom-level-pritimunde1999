//your JS code here. If required.
const element = document.getElementById('level');

function findDOMLevel(element)
	{
		let level = 0;
		let currEle = element;

		while(currEle!== document.documentElement)
		{
			currEle = currEle.parentElement;
			level++;
		}

		return level;
	}

const domLevel = findDOMLevel(element);

alert("The level of the element is: " + domLevel);