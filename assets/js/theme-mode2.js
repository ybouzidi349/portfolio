(function () {
  function ensureMode2RuntimeStyle() {
    if (document.getElementById('mode2-runtime-style')) return;

    var style = document.createElement('style');
    style.id = 'mode2-runtime-style';
    style.textContent = "\n"
      + "body.mode-2 { background: #08050f !important; color: #f5f3ff !important; }\n"
      + "body.mode-2, body.mode-2 .section, body.mode-2 .light-background, body.mode-2 .dark-background { background-color: #08050f !important; color: #f5f3ff !important; }\n"
      + "body.mode-2 #header, body.mode-2 .header { background: #120a21 !important; }\n"
      + "body.mode-2 h1, body.mode-2 h2, body.mode-2 h3, body.mode-2 h4, body.mode-2 h5, body.mode-2 h6, body.mode-2 p, body.mode-2 li, body.mode-2 span, body.mode-2 small, body.mode-2 strong { color: #f5f3ff !important; }\n"
      + "body.mode-2 .text-dark, body.mode-2 .text-black, body.mode-2 .text-secondary, body.mode-2 .text-body, body.mode-2 .text-body-secondary, body.mode-2 .text-muted { color: #d8c8f4 !important; }\n"
      + "body.mode-2 a { color: #c9a7ff !important; }\n"
      + "body.mode-2 .stats, body.mode-2 .about, body.mode-2 .resume, body.mode-2 .portfolio, body.mode-2 .contact, body.mode-2 .services, body.mode-2 .passions { background: #0d0818 !important; }\n"
      + "body.mode-2 .portfolio-content, body.mode-2 .portfolio-info, body.mode-2 .portfolio-description, body.mode-2 .portfolio-links, body.mode-2 .portfolio-controls, body.mode-2 .portfolio-search, body.mode-2 .portfolio-count { background: #120a21 !important; border-color: rgba(183,132,255,.30) !important; color: #f5f3ff !important; }\n"
      + "body.mode-2 .card, body.mode-2 .card-header, body.mode-2 .card-body, body.mode-2 .card-footer, body.mode-2 .bg-white, body.mode-2 .bg-light, body.mode-2 .bg-body, body.mode-2 .bg-body-tertiary, body.mode-2 .stats-item, body.mode-2 .resume-item, body.mode-2 .portfolio-content, body.mode-2 .feature-card, body.mode-2 .competence-card, body.mode-2 .sensor-item, body.mode-2 .schematic-container, body.mode-2 .main-image-container, body.mode-2 .project-hero, body.mode-2 .ressenti-card, body.mode-2 .competences-section, body.mode-2 .service-item, body.mode-2 .skill-card-item, body.mode-2 .contact .info-wrap, body.mode-2 .contact .info-item, body.mode-2 .contact .php-email-form, body.mode-2 .wrapper > div, body.mode-2 .modal-content, body.mode-2 .modal-header, body.mode-2 .modal-footer, body.mode-2 .modal-body { background: linear-gradient(135deg, #1a1030 0%, #100a1f 100%) !important; border-color: rgba(183,132,255,.30) !important; color: #f5f3ff !important; box-shadow: 0 10px 30px rgba(0,0,0,.35) !important; }\n"
      + "body.mode-2 .ressenti-section, body.mode-2 .ressenti-card, body.mode-2 .ressenti-conclusion { background: linear-gradient(135deg, #1a1030 0%, #100a1f 100%) !important; border-color: rgba(183,132,255,.32) !important; color: #f5f3ff !important; }\n"
      + "body.mode-2 .ressenti-card ul, body.mode-2 .ressenti-card li, body.mode-2 .ressenti-card h4, body.mode-2 .ressenti-section h2, body.mode-2 .ressenti-conclusion p { color: #f5f3ff !important; }\n"
      + "body.mode-2 .project-title { background: linear-gradient(45deg, #d8b4fe, #8b5cf6) !important; -webkit-background-clip: text !important; -webkit-text-fill-color: transparent !important; }\n"
      + "body.mode-2 .project-tags span, body.mode-2 .skill-badge, body.mode-2 .badge-custom, body.mode-2 .badge-tech, body.mode-2 .badge, body.mode-2 .domain-kpi, body.mode-2 .domain-tags span, body.mode-2 .comp-chip, body.mode-2 .year-btn, body.mode-2 .portfolio-search button, body.mode-2 .bg-soft-primary, body.mode-2 .bg-soft-success, body.mode-2 .bg-soft-danger, body.mode-2 .bg-soft-warning, body.mode-2 .bg-soft-dark { background: rgba(124,58,237,.24) !important; color: #f5f3ff !important; border: 1px solid rgba(196,161,255,.45) !important; }\n"
      + "body.mode-2 .skill-type-badge, body.mode-2 .skill-type-tech, body.mode-2 .skill-type-pro, body.mode-2 .skill-type-professionnelle, body.mode-2 [class*='skill-type-'] { background: rgba(124,58,237,.26) !important; color: #f5f3ff !important; border: 1px solid rgba(196,161,255,.55) !important; }\n"
      + "body.mode-2 .resume .resume-item h4, body.mode-2 .resume .resume-item h5, body.mode-2 .resume .resume-item p, body.mode-2 .resume .resume-item em, body.mode-2 .resume .resume-item span { color: #f5f3ff !important; }\n"
      + "body.mode-2 .resume .resume-item h5 { color: #d8b4fe !important; }\n"
      + "body.mode-2 .resume .resume-item .resume-date, body.mode-2 .resume .resume-item time, body.mode-2 .resume .resume-item .small { color: #d9c6ff !important; }\n"
      + "body.mode-2 #bacNotesCollapse .bg-light, body.mode-2 #bacNotesCollapse .border, body.mode-2 #bacNotesCollapse .rounded, body.mode-2 #bacNotesCollapse .list-group, body.mode-2 #bacNotesCollapse .list-group-item { background: #150d26 !important; color: #f5f3ff !important; border-color: rgba(183,132,255,.35) !important; }\n"
      + "body.mode-2 #bacNotesCollapse .badge { background: rgba(124,58,237,.35) !important; color: #fff !important; border-color: rgba(196,161,255,.55) !important; }\n"
      + "body.mode-2 .passions, body.mode-2 .passions-grid, body.mode-2 #passionsCollapse, body.mode-2 .passion-card, body.mode-2 .passion-body, body.mode-2 .passions-toggle, body.mode-2 .passion-tag { background: #140c24 !important; color: #f5f3ff !important; border-color: rgba(183,132,255,.35) !important; }\n"
      + "body.mode-2 .passion-card { box-shadow: 0 10px 26px rgba(0,0,0,.38) !important; }\n"
      + "body.mode-2 .passion-body p, body.mode-2 .passion-title span { color: #f5f3ff !important; }\n"
      + "body.mode-2 #competencesWidgetContent, body.mode-2 #projectFromSkillWidgetContent, body.mode-2 #activityContent, body.mode-2 .detail-view, body.mode-2 .comp-section, body.mode-2 .comp-evidence-card, body.mode-2 .evidence-card-mini, body.mode-2 .activity-card, body.mode-2 .activity-card-body, body.mode-2 .activity-validation, body.mode-2 .activity-strengths, body.mode-2 .activity-improvements { background: linear-gradient(135deg, #1a1030 0%, #100a1f 100%) !important; border-color: rgba(183,132,255,.30) !important; color: #f5f3ff !important; }\n"
      + "body.mode-2 #activityModal .modal-body, body.mode-2 #activityContent, body.mode-2 #activityContent .activity-wrapper, body.mode-2 #projectFromSkillWidgetContent .activity-wrapper, body.mode-2 #activityContent .activity-card, body.mode-2 #activityContent .activity-card-body, body.mode-2 #projectFromSkillWidgetContent .activity-card, body.mode-2 #projectFromSkillWidgetContent .activity-card-body, body.mode-2 #activityContent .activity-badge, body.mode-2 #projectFromSkillWidgetContent .activity-badge, body.mode-2 #activityContent .activity-technical, body.mode-2 #projectFromSkillWidgetContent .activity-technical, body.mode-2 #activityContent .activity-validation, body.mode-2 #projectFromSkillWidgetContent .activity-validation, body.mode-2 #activityContent .activity-validation .card, body.mode-2 #projectFromSkillWidgetContent .activity-validation .card, body.mode-2 #activityContent .alert, body.mode-2 #projectFromSkillWidgetContent .alert { background: linear-gradient(135deg, #1a1030 0%, #100a1f 100%) !important; color: #f5f3ff !important; border-color: rgba(183,132,255,.35) !important; }\n"
      + "body.mode-2 #activityContent .activity-header h2, body.mode-2 #projectFromSkillWidgetContent .activity-header h2, body.mode-2 #activityContent .activity-validation h3, body.mode-2 #projectFromSkillWidgetContent .activity-validation h3, body.mode-2 #activityContent .activity-validation h5, body.mode-2 #projectFromSkillWidgetContent .activity-validation h5, body.mode-2 #activityContent .activity-technical h3, body.mode-2 #projectFromSkillWidgetContent .activity-technical h3, body.mode-2 #activityContent .activity-technical h4, body.mode-2 #projectFromSkillWidgetContent .activity-technical h4, body.mode-2 #activityContent .activity-badge-text strong, body.mode-2 #projectFromSkillWidgetContent .activity-badge-text strong { color: #e8d9ff !important; border-color: rgba(183,132,255,.45) !important; }\n"
      + "body.mode-2 #activityContent p, body.mode-2 #activityContent li, body.mode-2 #activityContent span, body.mode-2 #activityContent strong, body.mode-2 #projectFromSkillWidgetContent p, body.mode-2 #projectFromSkillWidgetContent li, body.mode-2 #projectFromSkillWidgetContent span, body.mode-2 #projectFromSkillWidgetContent strong { color: #f5f3ff !important; }\n"
      + "body.mode-2 #competencesWidgetContent .comp-desc, body.mode-2 #competencesWidgetContent .comp-list li, body.mode-2 #competencesWidgetContent .small, body.mode-2 #projectFromSkillWidgetContent p, body.mode-2 #projectFromSkillWidgetContent li, body.mode-2 #activityContent p, body.mode-2 #activityContent li { color: #f5f3ff !important; }\n"
      + "body.mode-2 .project-modal-sidebar, body.mode-2 .projects-sidebar { background: linear-gradient(180deg, #18102b 0%, #110a1f 100%) !important; border-left-color: rgba(183,132,255,.25) !important; }\n"
      + "body.mode-2 .project-modal-sidebar .sidebar-header, body.mode-2 .sidebar-header { background: linear-gradient(135deg, #7c3aed 0%, #4c1d95 100%) !important; }\n"
      + "body.mode-2 .modal-project-link, body.mode-2 .project-link, body.mode-2 .skill-btn, body.mode-2 .competence-item { color: #f5f3ff !important; background: rgba(124,58,237,.12) !important; border-color: rgba(196,161,255,.35) !important; }\n"
      + "body.mode-2 .modal-project-link:hover, body.mode-2 .modal-project-link.active, body.mode-2 .project-link:hover, body.mode-2 .project-link.active, body.mode-2 .skill-btn:hover, body.mode-2 .competence-item:hover { background: rgba(124,58,237,.28) !important; color: #fff !important; }\n"
      + "body.mode-2 .btn-primary, body.mode-2 .btn-secondary, body.mode-2 .btn-outline-light, body.mode-2 .sidebar-toggle, body.mode-2 #projectModalSidebarToggle, body.mode-2 #mode2ToggleBtn.active { background: linear-gradient(135deg, #7c3aed 0%, #4c1d95 100%) !important; border-color: #7c3aed !important; color: #f5f3ff !important; }\n"
      + "body.mode-2 .btn-outline-primary, body.mode-2 .btn-outline-secondary { color: #dec9ff !important; border-color: rgba(196,161,255,.55) !important; }\n"
      + "body.mode-2 input, body.mode-2 textarea, body.mode-2 select, body.mode-2 .form-control, body.mode-2 .form-select, body.mode-2 .portfolio-search { background: #140d24 !important; color: #f5f3ff !important; border-color: rgba(183,132,255,.35) !important; }\n"
      + "body.mode-2 .progress, body.mode-2 .progress-bar, body.mode-2 .domain-pulse, body.mode-2 .modal-project-link::before, body.mode-2 .project-link::before { background-color: #8b5cf6 !important; }\n"
      + "body.mode-2 .btn-close { filter: invert(1) brightness(1.2); }\n";

    document.head.appendChild(style);
  }

  function isMode2Enabled() {
    return localStorage.getItem('portfolio-mode-2') === '1';
  }

  function applyMode2ToPage() {
    ensureMode2RuntimeStyle();

    var body = document.body;
    if (!body) return;

    body.classList.toggle('mode-2', isMode2Enabled());
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyMode2ToPage);
  } else {
    applyMode2ToPage();
  }

  window.applyMode2ToPage = applyMode2ToPage;
})();
