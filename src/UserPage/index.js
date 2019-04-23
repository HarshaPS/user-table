import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './userPage.css';

class UserProfile extends Component {
    render()
    {
        let user = this.props.location.state.userProfile[0];
        return (
            <div className="col-xs-12 col-sm-9">
                <h4 className="blue">
                    <span className="middle">{user.first_name} {user.last_name}</span>
                </h4>
    
                <div className="profile-user-info">
                    <div className="profile-info-row">
                        <div className="profile-info-name"> Company </div>
                        <div className="profile-info-value">
                            <span>{user.company_name}</span>
                        </div>
                    </div>
                </div>
                <div className="profile-user-info">
                    <div className="profile-info-row">
                        <div className="profile-info-name"> City </div>
                        <div className="profile-info-value">
                            <span>{user.city}</span>
                        </div>
                    </div>
                </div>
                <div className="profile-user-info">
                    <div className="profile-info-row">
                        <div className="profile-info-name"> State </div>
                        <div className="profile-info-value">
                            <span>{user.state}</span>
                        </div>
                    </div>
                </div>
                <div className="profile-user-info">
                    <div className="profile-info-row">
                        <div className="profile-info-name"> Zip </div>
                        <div className="profile-info-value">
                            <span>{user.zip}</span>
                        </div>
                    </div>
                </div>
                <div className="profile-user-info">
                    <div className="profile-info-row">
                        <div className="profile-info-name"> Email </div>
                        <div className="profile-info-value">
                            <span>{user.email}</span>
                        </div>
                    </div>
                </div>
                <div className="profile-user-info">
                    <div className="profile-info-row">
                        <div className="profile-info-name"> Web </div>
                        <div className="profile-info-value">
                            <span>{user.web}</span>
                        </div>
                    </div>
                </div>
                <div className="profile-user-info">
                    <div className="profile-info-row">
                        <div className="profile-info-name"> Age </div>
                        <div className="profile-info-value">
                            <span>{user.age}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserProfile


