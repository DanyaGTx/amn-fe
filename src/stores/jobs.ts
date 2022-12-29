import { ref } from "vue";
import { defineStore } from "pinia";

export const useJobsStore = defineStore("jobs", () => {
  const jobs = ref([
    {
      title: 'Title1',
      base_qualified: false,
      full_qualified: false,
      job_id: '1',
      publish_time: '1995-12-17T03:24:00',
      lead_category: 'design',
      skills: ['figma','c++','c#'],
      details: {
          baseQualification: {
            location: 'USA',
            duration: '6 month',
            workload: 'not determined',
            clienRating: 5,
            FixedPrice: 4000
          },
          fullQualification: {
            expertise: 'beginer',
            clientSpent: 0,
            lookingAgency: 'independent',
          },
        }
    },
    {
      title: 'Title2',
      base_qualified: false,
      full_qualified: false,
      job_id: '1',
      publish_time: '1995-12-17T03:24:00',
      lead_category: 'design',
      skills: ['figma','c++','c#'],
      details: {
        baseQualification: {
          location: 'USA',
          duration: '6 month',
          workload: 'not determined',
          clienRating: 5,
          FixedPrice: 4000
        },
        fullQualification: {
          expertise: 'beginer',
          clientSpent: 0,
          lookingAgency: 'independent',
        },
      }
    },
    {
      title: 'Title3',
      base_qualified: false,
      full_qualified: false,
      job_id: '1',
      publish_time: '1995-12-17T03:24:00',
      lead_category: 'design',
      skills: ['figma','c++','c#'],
      details: {
        baseQualification: {
          location: 'USA',
          duration: '6 month',
          workload: 'not determined',
          clienRating: 5,
          FixedPrice: 4000
        },
        fullQualification: {
          expertise: 'beginer',
          clientSpent: 0,
          lookingAgency: 'independent',
        },
      }
    },
    {
      title: 'Title4',
      base_qualified: false,
      full_qualified: false,
      job_id: '1',
      publish_time: '1995-12-17T03:24:00',
      lead_category: 'design',
      skills: ['figma','c++','c#'],
      details: {
        baseQualification: {
          location: 'USA',
          duration: '6 month',
          workload: 'not determined',
          clienRating: 5,
          FixedPrice: 4000
        },
        fullQualification: {
          expertise: 'beginer',
          clientSpent: 0,
          lookingAgency: 'independent',
        },
      }
    },
    {
      title: 'Title5',
      base_qualified: false,
      full_qualified: false,
      job_id: '1',
      publish_time: '1995-12-17T03:24:00',
      lead_category: 'design',
      skills: ['figma','c++','c#'],
      details: {
        baseQualification: {
          location: 'USA',
          duration: '6 month',
          workload: 'not determined',
          clienRating: 5,
          FixedPrice: 4000
        },
        fullQualification: {
          expertise: 'beginer',
          clientSpent: 0,
          lookingAgency: 'independent',
        },
      }
    },
    {
      title: 'Title6',
      base_qualified: false,
      full_qualified: false,
      job_id: '1',
      publish_time: '1995-12-17T03:24:00',
      lead_category: 'design',
      skills: ['figma','c++','c#'],
      details: {
        baseQualification: {
          location: 'USA',
          duration: '6 month',
          workload: 'not determined',
          clienRating: 5,
          FixedPrice: 4000
        },
        fullQualification: {
          expertise: 'beginer',
          clientSpent: 0,
          lookingAgency: 'independent',
        },
      }
    },
  ]);

  const meta = ref({
    current_page: 0,
    next_page: 0,
    prev_page: 0,
    total_count: 0,
    total_pages: 0,
  })
  return {
    jobs,
    meta
  }
});
