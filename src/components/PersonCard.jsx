import React from 'react';

const PersonCard = ({ person }) => {
    // Check if methods exist, otherwise fallback to properties or default values
    const role = typeof person.getRole === 'function' ? person.getRole() : (person.role || 'Person');
    const intro = typeof person.introduce === 'function' ? person.introduce() : (person.intro || 'Hello!');
    
    // Safely access properties
    const name = person.name || 'Unknown';
    const age = person.age || '?';

    return (
        <div className={`person-card ${role.toLowerCase()}`}>
            <div className="card-header-bg">
                <div className="role-badge-floating">{role}</div>
            </div>
            
            <div className="card-content-wrapper">
                <div className="card-avatar-wrapper">
                    <div className="avatar-inner">
                        {role === 'Student' ? '🎓' : role === 'Teacher' ? '👨‍🏫' : '👤'}
                    </div>
                </div>

                <div className="card-title-section">
                    <h3>{name}</h3>
                    <span className="age">{age} years old</span>
                </div>

                <div className="details-grid">
                    {role === 'Student' && (
                        <>
                            <div className="detail-row">
                                <span className="detail-label">Student ID</span>
                                <span className="detail-value">{person.studentId}</span>
                            </div>
                            <div className="detail-row">
                                <span className="detail-label">Major</span>
                                <span className="detail-value">{person.major}</span>
                            </div>
                        </>
                    )}

                    {role === 'Teacher' && (
                        <>
                            <div className="detail-row">
                                <span className="detail-label">Employee ID</span>
                                <span className="detail-value">{person.employeeId}</span>
                            </div>
                            <div className="detail-row">
                                <span className="detail-label">Subject</span>
                                <span className="detail-value">{person.subject}</span>
                            </div>
                        </>
                    )}
                     
                     {/* Default case of just being a Person, maybe show something generic or nothing extra */}
                    {role !== 'Student' && role !== 'Teacher' && (
                        <div className="detail-row">
                            <span className="detail-label">Status</span>
                            <span className="detail-value">Active</span>
                        </div>
                    )}
                </div>

                <div className="intro-quote">
                    "{intro}"
                </div>
            </div>
        </div>
    );
};

export default PersonCard;
