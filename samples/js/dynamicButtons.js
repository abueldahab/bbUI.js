/*
* Copyright 2010-2011 Research In Motion Limited.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

function addButton() {
	// Create the element just like you would in a normal screen declaration
	var button = document.createElement('div');
	button.setAttribute('data-bb-type','button');
	button.setAttribute('data-bb-style', 'stretch');
	button.innerHTML = 'Click to Remove';
	button.onclick = function() {
			this.remove();
		};
	// Apply our styling
	bb.button.style(button);
	// Insert it into the screen and update the scroller
	document.getElementById('buttonContainer').appendChild(button);
	bb.refresh();
}

  