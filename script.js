async function loadProfiles() {
    try {
        const response = await fetch('userProfile.json');
        if (!response.ok) throw new Error('Network response was not ok');
        
        const { userProfiles } = await response.json();
        displayProfiles(userProfiles);
    } catch (error) {
        document.getElementById('error-message').textContent = 'Unable to load profiles.';
    }
}

function displayProfiles(profiles) {
    const container = document.getElementById('profiles');
    container.innerHTML = profiles.length ? profiles.map(profile => `
        <div class="profile">
            <h3>${profile.firstName} ${profile.lastName}</h3>
            <p><strong>Email:</strong> ${profile.email}</p>
            <p><strong>DOB:</strong> ${profile.dateOfBirth}</p>
            <p><strong>Address:</strong> ${profile.profile.street}, ${profile.profile.city}, ${profile.profile.state}, ${profile.profile.zipCode}</p>
            <p><strong>Preferences:</strong> Theme: ${profile.preferences.theme}, Language: ${profile.preferences.language}</p>
        </div>
    `).join('') : '<p>No profiles to display.</p>';
}

document.addEventListener('DOMContentLoaded', loadProfiles);
