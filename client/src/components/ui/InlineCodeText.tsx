
i
m
p
o
r
t
 
{
 
F
r
a
g
m
e
n
t
 
}
 
f
r
o
m
 
"
r
e
a
c
t
"
;


i
m
p
o
r
t
 
t
o
a
s
t
 
f
r
o
m
 
"
.
/
t
o
a
s
t
"
;




i
n
t
e
r
f
a
c
e
 
I
n
l
i
n
e
C
o
d
e
T
e
x
t
P
r
o
p
s
 
{


 
 
t
e
x
t
:
 
s
t
r
i
n
g
;


}




e
x
p
o
r
t
 
f
u
n
c
t
i
o
n
 
I
n
l
i
n
e
C
o
d
e
T
e
x
t
(
{
 
t
e
x
t
 
}
:
 
I
n
l
i
n
e
C
o
d
e
T
e
x
t
P
r
o
p
s
)
 
{


 
 
c
o
n
s
t
 
h
a
n
d
l
e
C
o
p
y
 
=
 
a
s
y
n
c
 
(
c
o
d
e
:
 
s
t
r
i
n
g
)
 
=
>
 
{


 
 
 
 
t
r
y
 
{


 
 
 
 
 
 
a
w
a
i
t
 
n
a
v
i
g
a
t
o
r
.
c
l
i
p
b
o
a
r
d
.
w
r
i
t
e
T
e
x
t
(
c
o
d
e
)
;




 
 
 
 
 
 
t
o
a
s
t
.
s
u
c
c
e
s
s
(
"
C
o
d
e
 
c
o
p
i
e
d
!
"
)
;


 
 
 
 
}
 
c
a
t
c
h
 
(
e
r
r
)
 
{


 
 
 
 
 
 
c
o
n
s
o
l
e
.
e
r
r
o
r
(
"
F
a
i
l
e
d
 
t
o
 
c
o
p
y
 
i
n
l
i
n
e
 
c
o
d
e
:
"
,
 
e
r
r
)
;




 
 
 
 
 
 
t
o
a
s
t
.
e
r
r
o
r
(
"
F
a
i
l
e
d
 
t
o
 
c
o
p
y
 
c
o
d
e
"
)
;


 
 
 
 
}


 
 
}
;




 
 
c
o
n
s
t
 
p
a
r
t
s
 
=
 
t
e
x
t
.
s
p
l
i
t
(
/
(
`
[
^
`
]
+
`
)
/
g
)
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
>


 
 
 
 
 
 
{
p
a
r
t
s
.
m
a
p
(
(
p
a
r
t
,
 
i
n
d
e
x
)
 
=
>
 
{


 
 
 
 
 
 
 
 
i
f
 
(
p
a
r
t
.
s
t
a
r
t
s
W
i
t
h
(
"
`
"
)
 
&
&
 
p
a
r
t
.
e
n
d
s
W
i
t
h
(
"
`
"
)
)
 
{


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
c
o
d
e
 
=
 
p
a
r
t
.
s
l
i
c
e
(
1
,
 
-
1
)
;




 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
c
o
d
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
i
n
d
e
x
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>
 
h
a
n
d
l
e
C
o
p
y
(
c
o
d
e
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
i
t
l
e
=
"
C
l
i
c
k
 
t
o
 
c
o
p
y
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
m
x
-
0
.
5
 
r
o
u
n
d
e
d
 
p
x
-
1
.
5
 
p
y
-
0
.
5
 
f
o
n
t
-
m
o
n
o
 
t
e
x
t
-
[
0
.
9
e
m
]
 
b
g
-
g
r
a
y
-
1
0
0
 
d
a
r
k
:
b
g
-
g
r
a
y
-
8
0
0
 
t
e
x
t
-
g
r
a
y
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
a
y
-
1
0
0
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
g
r
a
y
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
g
r
a
y
-
7
0
0
 
c
u
r
s
o
r
-
p
o
i
n
t
e
r
 
h
o
v
e
r
:
b
g
-
g
r
a
y
-
2
0
0
 
d
a
r
k
:
h
o
v
e
r
:
b
g
-
g
r
a
y
-
7
0
0
 
t
r
a
n
s
i
t
i
o
n
-
c
o
l
o
r
s
 
a
c
t
i
v
e
:
s
c
a
l
e
-
9
5
 
i
n
l
i
n
e
"


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
o
d
e
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
c
o
d
e
>


 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
}




 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
<
F
r
a
g
m
e
n
t
 
k
e
y
=
{
i
n
d
e
x
}
>
{
p
a
r
t
}
<
/
F
r
a
g
m
e
n
t
>
;


 
 
 
 
 
 
}
)
}


 
 
 
 
<
/
>


 
 
)
;


}
