---
# Leave the homepage title empty to use the site title
title:
date: 2024-04-01
type: landing

sections:
  - block: about.avatar
    id: about
    content:
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
  - block: experience
    content:
      title: Experience
      # Date format for experience
      #   Refer to https://wowchemy.com/docs/customization/#date-format
      date_format: Jan 2006
      # Experiences.
      #   Add/remove as many `experience` items below as you like.
      #   Required fields are `title`, `company`, and `date_start`.
      #   Leave `date_end` empty if it's your current employer.
      #   Begin multi-line descriptions with YAML's `|2-` multi-line prefix.
      items:
        - title: Architect
          company: Rogi Mimarlık
          company_url: 'https://www.rogi.com.tr'
          # company_logo: org-x
          location: Istanbul
          date_start: '2023-12'
          date_end: ''
          description: ''
        - title: Architect
          company: YapıArtı Mimarlık
          company_url: 'https://www.yapiarti.com.tr/'
          # company_logo: yapi-arti
          location: Istanbul
          date_start: '2020-11'
          date_end: '2022-09'
          description: Drew shop drawings of the furniture according to interior design projects
    design:
      columns: '2'
  - block: contact
    id: contact
    content:
      title: Contact
      email: nazozbek@gmail.com
      appointment_url: 'https://calendly.com'
      address:
        street: Kadıköy
        city: Istanbul
      # Automatically link email and phone or display as text?
      autolink: true
    design:
      columns: '2'
---
