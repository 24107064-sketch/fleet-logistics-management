import {useEffect,useMemo,useRef,useState,type ReactNode} from 'react';
import {Link,useLocation} from 'wouter';
import {Activity as ActivityIcon,BarChart3, Bell, ChevronRight, Gauge, Map, Menu, Package, Search, Settings, Truck, Users, X} from 'lucide-react';
import {useStore} from '../store';

const groups=[{label:'OVERVIEW',items:[['/dashboard','Dashboard',Gauge]]},{label:'FLEET OPERATIONS',items:[['/vehicles','Vehicles',Truck],['/drivers','Drivers',Users],['/shipments','Shipments',Package],['/routes','Routes',Map]]},{label:'MANAGEMENT',items:[['/reports','Reports',BarChart3],['/activity','Activity Log',ActivityIcon]]},{label:'SYSTEM',items:[['/settings','Settings',Settings]]}] as const;
const titleByPath:Record<string,string>={'/':'Dashboard','/dashboard':'Dashboard','/vehicles':'Vehicles','/drivers':'Drivers','/shipments':'Shipments','/routes':'Routes','/reports':'Reports','/activity':'Activity Log','/settings':'Settings'};
export function Shell({children}:{children:ReactNode}){
 const [path,go]=useLocation(),[menu,setMenu]=useState(false),[query,setQuery]=useState(''),[notif,setNotif]=useState(false),[now,setNow]=useState(new Date());
 const searchRef=useRef<HTMLInputElement>(null);const {vehicles,drivers,shipments,notifications,readNotification}=useStore();
 useEffect(()=>{const key=(e:KeyboardEvent)=>{if(e.key==='/'&&!['INPUT','TEXTAREA','SELECT'].includes((e.target as HTMLElement)?.tagName)){e.preventDefault();searchRef.current?.focus()}if(e.key==='Escape'){setQuery('');setNotif(false);setMenu(false)}};window.addEventListener('keydown',key);const timer=window.setInterval(()=>setNow(new Date()),60000);return()=>{window.removeEventListener('keydown',key);clearInterval(timer)}},[]);
 const searchResults=useMemo(()=>{const q=query.trim().toLowerCase();if(q.length<2)return {v:[],d:[],s:[]};return {v:vehicles.filter(x=>`${x.registration} ${x.type} ${x.make}`.toLowerCase().includes(q)).slice(0,4),d:drivers.filter(x=>`${x.name} ${x.id}`.toLowerCase().includes(q)).slice(0,4),s:shipments.filter(x=>`${x.id} ${x.customer} ${x.origin} ${x.destination}`.toLowerCase().includes(q)).slice(0,5)}},[query,vehicles,drivers,shipments]);
 const unread=notifications.filter(n=>!n.read).length;const title=path.startsWith('/shipments/')?'Shipment detail':titleByPath[path]||'Operations';
 const goResult=(target:string)=>{go(target);setQuery('');setMenu(false)};
 return <div className="app-shell">
  <div className={`mobile-nav-backdrop ${menu?'open':''}`} onClick={()=>setMenu(false)} />
  <aside className={`sidebar ${menu?'open':''}`}>
   <div className="brand"><div className="brand-mark"><Map size={19}/></div><div className="brand-title">FLEET & LOGISTICS</div><div className="brand-sub">OPERATIONS CONSOLE</div><span className="env-pill">LOCAL / DEMO</span></div>
   <nav className="nav-scroll" aria-label="Main navigation">{groups.map(g=><div key={g.label}><div className="nav-label">{g.label}</div>{g.items.map(([href,label,Icon])=><Link key={href} href={href} className={`nav-link ${path===href||href==='/shipments'&&path.startsWith('/shipments/')?'active':''}`} onClick={()=>setMenu(false)} data-testid={`nav-${label.toLowerCase().replaceAll(' ','-')}`}><Icon size={15}/><span>{label}</span></Link>)}</div>)}</nav>
   <div className="profile"><div className="avatar">OA</div><div><div style={{fontSize:11}}>Operations Admin</div><div style={{fontSize:9,color:'#aaa99f',marginTop:4}}>Fleet Administrator</div></div><Link href="/settings" className="icon-button" aria-label="Open settings" data-testid="link-profile-settings"><Settings size={15}/></Link></div>
  </aside>
  <div className="main-area">
   <header className="topbar">
    <button className="icon-button mobile-menu" aria-label="Open navigation" onClick={()=>setMenu(true)} data-testid="button-open-navigation"><Menu size={18}/></button>
    <div className="crumb" data-testid="text-breadcrumb"><span>OPERATIONS</span><ChevronRight size={12} style={{display:'inline',margin:'0 5px'}}/><span style={{color:'#252722'}}>{title.toUpperCase()}</span></div>
    <div className="global-search"><Search size={15} className="search-icon"/><input ref={searchRef} value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search vehicles, drivers, shipments..." aria-label="Search vehicles, drivers, shipments" data-testid="input-global-search"/>{query?<button className="shortcut" onClick={()=>setQuery('')} aria-label="Clear search"><X size={12}/></button>:<span className="shortcut">/</span>}
     {query.length>=2&&<div className="search-results" role="listbox">{!searchResults.v.length&&!searchResults.d.length&&!searchResults.s.length?<div className="empty">No matching records found.</div>:<>{searchResults.v.length>0&&<><div className="result-group">Vehicles</div>{searchResults.v.map(x=><button key={x.id} className="result-item" onClick={()=>goResult('/vehicles')} data-testid={`result-vehicle-${x.id}`}><b>{x.registration}</b><span className="muted"> · {x.type} · {x.status}</span></button>)}</>}{searchResults.d.length>0&&<><div className="result-group">Drivers</div>{searchResults.d.map(x=><button key={x.id} className="result-item" onClick={()=>goResult('/drivers')} data-testid={`result-driver-${x.id}`}><b>{x.name}</b><span className="muted"> · {x.id}</span></button>)}</>}{searchResults.s.length>0&&<><div className="result-group">Shipments</div>{searchResults.s.map(x=><button key={x.id} className="result-item" onClick={()=>goResult(`/shipments/${x.id}`)} data-testid={`result-shipment-${x.id}`}><b>{x.id}</b><span className="muted"> · {x.customer} · {x.origin} to {x.destination}</span></button>)}</>}</>}</div>}
    </div>
    <div className="top-actions"><span className="clock" style={{fontSize:9,color:'#77766E'}}>{now.toLocaleDateString('en-IN',{day:'2-digit',month:'short'})} · {now.toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit',hour12:false})}</span>
     <div style={{position:'relative'}}><button className="icon-button" aria-label={`Notifications, ${unread} unread`} onClick={()=>setNotif(x=>!x)} data-testid="button-notifications"><Bell size={17}/>{unread>0&&<span className="unread-dot"/>}</button>
      {notif&&<div className="popover"><div className="panel-head"><strong style={{fontSize:11}}>Notifications <span className="muted">({unread} unread)</span></strong><button className="btn btn-small" onClick={()=>readNotification()} data-testid="button-read-all">Mark all read</button></div>{notifications.map(n=><button key={n.id} onClick={()=>{readNotification(n.id);setNotif(false);goResult(n.text.match(/SHP-\d+/)?.[0]?`/shipments/${n.text.match(/SHP-\d+/)?.[0]}`:'/activity')}} className="result-item" style={{opacity:n.read ? .62 : 1}} data-testid={`notification-${n.id}`}><span className="status delayed">{n.type}</span><div style={{marginTop:7,lineHeight:1.5}}>{n.text}</div></button>)}</div>}
     </div>
     <Link className="btn btn-primary btn-small" href="/shipments" data-testid="button-header-new-shipment"><Package size={13}/>New shipment</Link>
    </div>
   </header>
   {children}
  </div>
 </div>;
}
