import type { Schema, Struct } from '@strapi/strapi';

export interface SharedDepartment extends Struct.ComponentSchema {
  collectionName: 'components_shared_departments';
  info: {
    displayName: 'Department';
    icon: 'earth';
  };
  attributes: {
    Department: Schema.Attribute.Enumeration<
      ['Bergen', 'Trondheim', '\u00C5s', 'Hovedstyret']
    >;
  };
}

export interface SharedFaqSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_faq_sections';
  info: {
    description: '';
    displayName: 'FAQ Section';
    icon: 'discuss';
  };
  attributes: {
    questions: Schema.Attribute.Component<'shared.question-and-answer', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedImage extends Struct.ComponentSchema {
  collectionName: 'components_shared_images';
  info: {
    displayName: 'Image';
    icon: 'picture';
  };
  attributes: {
    file: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuestionAndAnswer extends Struct.ComponentSchema {
  collectionName: 'components_shared_question_and_answers';
  info: {
    displayName: 'Question and Answer';
    icon: 'discuss';
  };
  attributes: {
    answer: Schema.Attribute.Text & Schema.Attribute.Required;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Text';
    icon: 'pencil';
  };
  attributes: {
    body: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedTextAndImage extends Struct.ComponentSchema {
  collectionName: 'components_shared_text_and_images';
  info: {
    description: '';
    displayName: 'Text and Image';
    icon: 'dashboard';
  };
  attributes: {
    image: Schema.Attribute.Component<'shared.image', false>;
    text: Schema.Attribute.Component<'shared.rich-text', false>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.department': SharedDepartment;
      'shared.faq-section': SharedFaqSection;
      'shared.image': SharedImage;
      'shared.media': SharedMedia;
      'shared.question-and-answer': SharedQuestionAndAnswer;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.text-and-image': SharedTextAndImage;
    }
  }
}
