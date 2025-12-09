import React from 'react';

interface UserClassProps {
    name: string;
    location: string;
}
interface UserClassState {
    userInfo: any;
}

class UserClass extends React.Component<UserClassProps, UserClassState> {
    constructor(props: UserClassProps) {
        super(props);
        console.log(props);
        this.state = {
            userInfo: {}
        };
    }
    async componentDidMount() {
        // github api calling 
        const data = await fetch("https://api.github.com/users/Deven-puri");
        const json = await data.json();
        this.setState({
            userInfo: json
        })
        console.log(json);
    }
    render() {
        const { name, location } = this.props;
        const { userInfo }: any = this.state;
        return (
            <div className="user-card">
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                {userInfo?.login && (
                    <div>
                        <h4>GitHub: @{userInfo.login}</h4>
                        <p>Followers: {userInfo.followers}</p>
                        {userInfo.avatar_url && (
                            <img src={userInfo.avatar_url} alt={userInfo.login} style={{ width: 100, borderRadius: 10 }} />
                        )}
                    </div>
                )}
                <h4>Contact: 9858909858</h4>
            </div>
        );
    }
}

export default UserClass;