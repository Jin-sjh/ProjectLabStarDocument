# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

import os
import sys
sys.path.insert(0, os.path.abspath('../../backend'))

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

project = 'Project LabStar'
copyright = '2026, 宁梦未来'
author = '宁梦未来'
release = 'v0.1.0'

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

extensions = [
    'sphinx.ext.autodoc',
    'sphinx.ext.viewcode',
    'myst_parser',
    'sphinx.ext.napoleon',
    'sphinx.ext.githubpages',
]

templates_path = ['_templates']
exclude_patterns = []

language = 'zh_CN'

# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

html_theme = 'pydata_sphinx_theme'
html_static_path = ['_static']

html_theme_options = {
    "github_url": "https://github.com/Jin-sjh/ProjectLabStar",
    "use_edit_page_button": True,
    "show_toc_level": 1,
    "navbar_end": ["theme-switcher", "navbar-icon-links"],
    "icon_links": [
        {
            "name": "GitHub",
            "url": "https://github.com/Jin-sjh/ProjectLabStar",
            "icon": "fab fa-github",
        },
        {
            "name": "PyPI",
            "url": "https://github.com/Jin-sjh/ProjectLabStar",
            "icon": "fab fa-python",
        },
    ],
    "header_links_before_dropdown": 4,
    "pygments_light_style": "github",
    "pygments_dark_style": "github-dark",
}

html_context = {
    "github_user": "ningmengweilai",
    "github_repo": "ProjectLabStar",
    "github_version": "main",
    "doc_path": "docs/source",
}

html_css_files = [
    "custom.css",
]

html_js_files = [
    "custom.js",
]

# -- Autodoc configuration --------------------------------------------------

autodoc_default_options = {
    "members": True,
    "undoc-members": True,
    "show-inheritance": True,
    "inherited-members": False,
}

autodoc_typehints = "description"

# -- MyST configuration -----------------------------------------------------

myst_enable_extensions = ['colon_fence', 'deflist', 'strikethrough']
myst_heading_anchors = 3

# -- Napoleon configuration -------------------------------------------------

napoleon_google_docstring = True
napoleon_numpy_docstring = True
napoleon_preprocess_types = True

# -- Linkcheck configuration ------------------------------------------------

linkcheck_anchors = False
linkcheck_timeout = 30
