import type { NextPage } from "next";
import { BottomBar } from "~/components/BottomBar";
import { LeftBar } from "~/components/LeftBar";
import {
    BronzeLeagueSvg,
    EditPencilSvg,
    EmptyFireSvg,
    FireSvg,
    LightningProgressSvg,
    EmptyMedalSvg,
    ProfileFriendsSvg,
    ProfileTimeJoinedSvg,
    SettingsGearSvg,
} from "~/components/Svgs";
import Link from "next/link";
import { Flag } from "~/components/Flag";
import { useBoundStore } from "~/hooks/useBoundStore";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import type { ComponentProps } from "react";
import React from "react";

import { RightBar } from "~/components/RightBar";
import { TopBar } from "~/components/TopBar";

const Guidebook: NextPage = () => {

    return (
        <div>
            <TopBar />
            <LeftBar selectedTab="Learn" />
            <div className="flex justify-center gap-3 pt-14 md:ml-24 lg:ml-64 lg:gap-12">
                <div className="flex w-full max-w-4xl flex-col gap-5 p-5">

                </div>
            </div>
            <div className="pt-[90px]"></div>
            <RightBar />
            <BottomBar selectedTab="Profile" />
        </div>
    );
};

export default Guidebook;