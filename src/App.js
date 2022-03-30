import React, { Component } from 'react';
import FinalNavigation from './containers/navigation/navigationContainer.js';
import FinalBody from './containers/body/bodyContainer.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visInfo: {},
    };
  }

  componentDidMount() {
    const urlParams = new URLSearchParams(window.location.search);
    const urlDisablePendo = urlParams.get('disablePendo') === 'true';
    const urlApiKey = urlParams.get('apiKey');
    const urlVisitor = urlParams.get('visitor') || '';
    const urlAccount = urlParams.get('account') || '';
    const urlRole = urlParams.get('role') || '';
    const urlTeam = urlParams.get('team') || '';
    const urlTitle = urlParams.get('title') || '';
    const urlQuotaAttainment = urlParams.get('quotaAttainment') || '';
    const urlRegion = urlParams.get('region') || '';
    const urlOffice = urlParams.get('office') || '';
    const urlSystem = urlParams.get('system') || '';

    fetch(
      `/visitorApi/visitors/new?visitor=${urlVisitor}&account=${urlAccount}&role=${urlRole}&team=${urlTeam}&title=${urlTitle}&quotaAttainment=${urlQuotaAttainment}&region=${urlRegion}&office=${urlOffice}&system=${urlSystem}`
    )
      .then((res) => res.json())
      .then((visInfo) => {
        this.setState({ visInfo: visInfo });
        initPendo(visInfo);
      })
      .catch((error) => {
        console.error('Failed to load visitor metadata:', error);
        console.log('Using default metadata');

        const visInfo = {
          visitor: {
            id: 'ryan@test.com',
            role: 'user',
            team: 'Product',
            title: 'Product Manager',
            region: 'AMER',
            office: 'Raleigh',
            system: 'Mac',
            quotaBasedRole: false,
            quotaAttainment: 0,
          },
          account: { id: 'test' },
        };

        this.setState({ visInfo: visInfo });
        initPendo(visInfo);
      });

    function initPendo(visInfo) {
      // Initialize Pendo if not disabled by url param
      if (!urlDisablePendo) {
        // Pendo Snippet
        (function (apiKey) {
          (function (p, e, n, d, o) {
            var v, w, x, y, z;
            o = p[d] = p[d] || {};
            o._q = [];
            v = [
              'initialize',
              'identify',
              'updateOptions',
              'pageLoad',
              'track',
            ];
            for (w = 0, x = v.length; w < x; ++w)
              (function (m) {
                o[m] =
                  o[m] ||
                  function () {
                    o._q[m === v[0] ? 'unshift' : 'push'](
                      [m].concat([].slice.call(arguments, 0))
                    );
                  };
              })(v[w]);
            y = e.createElement(n);
            y.async = !0;
            y.src = 'https://cdn.pendo.io/agent/static/' + apiKey + '/pendo.js';
            z = e.getElementsByTagName(n)[0];
            z.parentNode.insertBefore(y, z);
          })(window, document, 'script', 'pendo');

          pendo.initialize({
            additionalApiKeys: urlApiKey
              ? []
              : [
                  '758434d6-672f-4326-4db4-64412a4af191', // Pendo Experience Sandbox
                  'bada3d2f-3371-418a-6711-c9ed5af6d466', // Pendo - Onboarding
                  '9a491f59-cc46-43e2-4c67-179d36c5d03b', // Pendo Free Sample Data (US prod)
                  'b2cb409b-391e-4505-71ef-f35a6ba59b9f', // (Demo) Digital Adaoption - SFDC
                  'aafdb96f-d3f0-4704-59a1-912a146e228c', // sr$2A - d44B! (Custom Demo Sub)
                ],
            visitor: visInfo.visitor,
            account: visInfo.account,
          });
        })(urlApiKey || '74924fb4-e18c-42b1-664b-47ed918c3a45');

        // Don't add zendesk widget if urlApiKey specified
        if (!urlApiKey) {
          // Zendesk widget script
          const script = document.createElement('script');
          script.id = 'ze-snippet';
          script.src =
            'https://static.zdassets.com/ekr/snippet.js?key=95aa7acb-d169-4ca7-bff8-dcb94bd4b1f1';
          document.head.appendChild(script);
        }
      }
    }
  }

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
        <FinalBody visInfo={this.state.visInfo} />
      </div>
    );
  }
}

export default App;
