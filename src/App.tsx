import React, { useState } from 'react';
import { Layout } from './components/common/Layout';
import { DashboardView } from './components/Dashboard/DashboardView';
import { UserListView } from './components/UserList/UserListView';
import { useUsers } from './hooks/useUsers';

function App() {
  const [currentView, setCurrentView] = useState<'dashboard' | 'users'>('dashboard');
  const { users, loading, error, updateUser, deleteUser } = useUsers();

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow-sm border border-red-200">
          <h2 className="text-xl font-semibold text-red-600 mb-2">Error Loading Data</h2>
          <p className="text-gray-600">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <Layout currentView={currentView} onViewChange={setCurrentView}>
      {currentView === 'dashboard' ? (
        <DashboardView users={users} loading={loading} />
      ) : (
        <UserListView 
          users={users} 
          loading={loading}
          onUpdateUser={updateUser}
          onDeleteUser={deleteUser}
        />
      )}
    </Layout>
  );
}

export default App;