import BottomNav from '../ui/BottomNav';

const AppLayout = ({ children }) => {
    return (
        <div style={{ minHeight: '100vh', paddingBottom: '80px' }}>
            {children}
            <BottomNav />
        </div>
    );
};

export default AppLayout;
