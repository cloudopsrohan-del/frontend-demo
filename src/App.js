import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>🚀 DevOps Demo App</h1>
        <p>Learn and explore DevOps technologies!</p>

        <div className="logos" style={{ display: 'flex', justifyContent: 'center', gap: '20px', margin: '20px 0' }}>
          <img src="https://www.jenkins.io/images/logos/jenkins/jenkins.png" alt="Jenkins Logo" style={{ height: '80px' }} />
          <img src="https://www.docker.com/sites/default/files/d8/2019-07/Moby-logo.png" alt="Docker Logo" style={{ height: '80px' }} />
          <img src="https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png" alt="AWS Logo" style={{ height: '80px' }} />
        </div>

        <p>
          Build, Deploy, Monitor — All in one place!
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <a
            className="App-link"
            href="https://aws.amazon.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn AWS
          </a>
          <a
            className="App-link"
            href="https://www.jenkins.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Jenkins
          </a>
          <a
            className="App-link"
            href="https://www.docker.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Docker and Kubernetess
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
