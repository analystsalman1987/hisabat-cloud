
import { useState } from 'react'
import {
  LayoutDashboard, Wallet, ShoppingCart, Package,
  Users, FileText, Settings, Bell, Search,
  TrendingUp, TrendingDown, Globe, ChevronDown,
  Menu, Plus, ArrowUpRight, Clock, CreditCard
} from 'lucide-react'

export default function App() {
  const [active, setActive] = useState('Dashboard')
  const [language, setLanguage] = useState('English')
  const [menuOpen, setMenuOpen] = useState(false)

  const modules = [
    { name: 'Dashboard', icon: LayoutDashboard },
    { name: 'Accounting', icon: Wallet },
    { name: 'Sales', icon: ShoppingCart },
    { name: 'Purchases', icon: CreditCard },
    { name: 'Inventory', icon: Package },
    { name: 'Customers', icon: Users },
    { name: 'Suppliers', icon: Users },
    { name: 'Reports', icon: FileText },
    { name: 'Settings', icon: Settings },
  ]

  return (
    <div className="app">
      <aside className={`sidebar ${menuOpen ? 'show' : ''}`}>
        <div className="brand">
          <div className="brand-icon">H</div>
          <div><h2>HISABAT</h2><span>CLOUD ERP</span></div>
        </div>
        <div className="workspace">
          <span>WORKSPACE</span>
          <strong>My Company</strong>
        </div>
        <nav>
          <small>MAIN MENU</small>
          {modules.map(item => {
            const Icon = item.icon
            return (
              <button key={item.name}
                className={active === item.name ? 'nav-item active' : 'nav-item'}
                onClick={() => { setActive(item.name); setMenuOpen(false) }}>
                <Icon size={19}/><span>{item.name}</span>
              </button>
            )
          })}
        </nav>
        <div className="sidebar-bottom">
          <div className="help"> <span>✦</span><div><b>Need assistance?</b><p>We're here to help you.</p></div></div>
          <div className="user"><div className="avatar">MS</div><div><b>Administrator</b><p>Super Admin</p></div></div>
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)}><Menu/></button>
          <div className="breadcrumb">Workspace / <b>{active}</b></div>
          <div className="top-actions">
            <button className="language" onClick={() => setLanguage(language === 'English' ? 'العربية' : 'English')}><Globe size={17}/>{language}<ChevronDown size={15}/></button>
            <button className="notification"><Bell size={19}/><i/></button>
            <div className="avatar">MS</div>
          </div>
        </header>

        <section className="content">
          <div className="welcome">
            <div><span className="eyebrow">SUNDAY, NOVEMBER 8, 2026</span><h1>Welcome back, Administrator 👋</h1><p>Here's what's happening with your business today.</p></div>
            <button className="primary"><Plus size={18}/> New Transaction</button>
          </div>

          <div className="section-title"><div><h2>Business Overview</h2><p>Your financial performance at a glance</p></div><button className="filter">This Month <ChevronDown size={15}/></button></div>

          <div className="stats">
            <div className="stat"><div className="stat-head"><span>Total Revenue</span><span className="stat-icon blue"><TrendingUp/></span></div><h2>SAR 128,450.00</h2><p className="positive">↗ 12.8% <span>vs last month</span></p></div>
            <div className="stat"><div className="stat-head"><span>Total Expenses</span><span className="stat-icon orange"><TrendingDown/></span></div><h2>SAR 48,290.00</h2><p className="negative">↗ 4.2% <span>vs last month</span></p></div>
            <div className="stat"><div className="stat-head"><span>Accounts Receivable</span><span className="stat-icon purple"><Users/></span></div><h2>SAR 32,800.00</h2><p className="neutral">12 outstanding invoices</p></div>
            <div className="stat"><div className="stat-head"><span>Accounts Payable</span><span className="stat-icon green"><CreditCard/></span></div><h2>SAR 18,650.00</h2><p className="neutral">8 pending bills</p></div>
          </div>

          <div className="panels">
            <div className="panel chart-panel"><div className="panel-heading"><div><h3>Revenue & Expenses</h3><p>Monthly financial summary</p></div><span className="chart-label">2026</span></div>
              <div className="chart"><div className="chart-y"><span>150k</span><span>100k</span><span>50k</span><span>0</span></div><div className="chart-area">{['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'].map((m,i)=><div className="bar-group" key={m}><div className="bars"><i style={{height:`${35+(i*17)%55}%`}}/><i style={{height:`${20+(i*11)%40}%`}}/></div><small>{m}</small></div>)}</div></div>
              <div className="legend"><span><i className="blue-dot"/>Revenue</span><span><i className="orange-dot"/>Expenses</span></div>
            </div>
            <div className="panel"><div className="panel-heading"><div><h3>Quick Actions</h3><p>Common tasks</p></div></div>
              <div className="quick-actions">
                {[['＋','New Invoice','Create sales invoice'],['↙','Record Payment','Receive customer payment'],['＋','New Purchase','Create purchase order'],['▤','View Reports','Financial reports']].map(a=><button key={a[1]} onClick={()=>setActive(a[1])}><span>{a[0]}</span><div><b>{a[1]}</b><small>{a[2]}</small></div><ArrowUpRight size={16}/></button>)}
              </div>
            </div>
          </div>

          <div className="panel transactions"><div className="panel-heading"><div><h3>Recent Transactions</h3><p>Latest business activities</p></div><button className="view-all" onClick={()=>setActive('Accounting')}>View All <ArrowUpRight size={15}/></button></div>
            <div className="table-wrap"><table><thead><tr><th>TRANSACTION</th><th>DATE</th><th>TYPE</th><th>AMOUNT</th><th>STATUS</th></tr></thead><tbody>
              <tr><td><b>INV-2026-001</b><small>ABC Trading Company</small></td><td>08 Nov 2026</td><td>Sales Invoice</td><td className="amount">SAR 12,500.00</td><td><span className="status paid">Paid</span></td></tr>
              <tr><td><b>INV-2026-002</b><small>Global Supplies Ltd.</small></td><td>07 Nov 2026</td><td>Sales Invoice</td><td className="amount">SAR 8,750.00</td><td><span className="status pending">Pending</span></td></tr>
              <tr><td><b>PO-2026-014</b><small>Modern Industrial Co.</small></td><td>06 Nov 2026</td><td>Purchase</td><td className="amount">SAR 5,200.00</td><td><span className="status paid">Completed</span></td></tr>
            </tbody></table></div>
          </div>
          <footer>© 2026 HISABAT Cloud. All rights reserved. <span>Built for smarter business management.</span></footer>
        </section>
      </main>
    </div>
  )
}
