import { Link } from "react-router-dom";

const Login = () => {
    const handleLogin = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email=e.target.email.value;
        const password =e.target.password.value;
        console.log(name,email,password)

    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" 
                placeholder="Please Enter name" 
                name="name" 
                className="input input-bordered" 
                required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email"
                name="email"
                placeholder="email" 
                className="input input-bordered" 
                required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password"
                name="password" 
                placeholder="password" 
                className="input input-bordered" 
                required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className="text-xl text-center mb-3 p-2 font-semibold">Already have an account? or 
            <Link className="text-blue-600" to="/registration">Registration</Link></p>
          </div>
        </div>
      </div>
    );
};

export default Login;