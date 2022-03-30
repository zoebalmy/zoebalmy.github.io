import React, { Component } from 'react';
import FinalNavigation from './containers/navigation/navigationContainer.js';
import FinalBody from './containers/body/bodyContainer.js';

class App extends Component {

  render() {
    document.addEventListener(
      'keyup',
      (e) => {
        if (e.ctrlKey) {
          switch (e.code) {
            case 'KeyJ':
              window.pendo.showGuideById('A4Z_u7D0GnW27J7oCwtG0Ptekfk');
              break;
            case 'KeyK':
              window.pendo.designerv2.launchInAppDesigner();
              break;
            case 'KeyJL':
              window.pendo.showGuideById('kp8lRQSArHUW79IzqloeIBatViI');
              break;
          }
        }
      },
      false
    );

    return (
      <div className="App">
        <FinalNavigation />
        <FinalBody visInfo="" />
      </div>
    );
  }
}

export default App;
