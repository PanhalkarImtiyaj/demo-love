import rocketImg from '../../assets/rocket.png';
import './StatsSection.css';

export default function StatsSection() {
  return (
    <section className="stats" id="contact">
      <div className="stats__inner">
        {/* Left Content */}
        <div className="stats__left">
          <span className="stats__tag">SUCCESS STORIES</span>
          <h2 className="stats__title">
            Organic Audience<br/>Driven On Your<br/>Websites
          </h2>
          <div className="stats__trust">
            <div className="trust-avatars">
              <img src="https://i.pravatar.cc/100?img=10" alt="User 1" className="avatar" />
              <img src="https://i.pravatar.cc/100?img=11" alt="User 2" className="avatar" />
              <img src="https://i.pravatar.cc/100?img=12" alt="User 3" className="avatar" />
            </div>
            <div>
              <div className="stars">
                <i className='bx bxs-star'></i>
                <i className='bx bxs-star'></i>
                <i className='bx bxs-star'></i>
                <i className='bx bxs-star'></i>
                <i className='bx bxs-star'></i>
              </div>
              <div className="trust-label">Trustpilot</div>
            </div>
          </div>
        </div>

        {/* Center — Rocket Laptop */}
        <div className="stats__center">
          <img src={rocketImg} alt="Rocket launching from laptop" className="stats__rocket-img" />
        </div>

        {/* Right — Stats Cards */}
        <div className="stats__right">
          <div className="stat-card">
            <div className="stat-card__num">500+</div>
            <h3 className="stat-card__label">Total Project</h3>
            <p className="stat-card__desc">
              Lorem dolor amet consectetur read adipiscing any more elit.
            </p>
          </div>

          <div className="stat-card">
            <div className="stat-card__num">300M+</div>
            <h3 className="stat-card__label">Investment</h3>
            <p className="stat-card__desc">
              Lorem dolor amet consectetur read adipiscing any more elit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
