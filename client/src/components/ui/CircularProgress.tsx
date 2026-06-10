
i
m
p
o
r
t
 
R
e
a
c
t
 
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
n
t
e
r
f
a
c
e
 
C
i
r
c
u
l
a
r
P
r
o
g
r
e
s
s
P
r
o
p
s
 
{


 
 
p
r
o
g
r
e
s
s
:
 
n
u
m
b
e
r
;


 
 
s
i
z
e
?
:
 
n
u
m
b
e
r
;


 
 
s
t
r
o
k
e
W
i
d
t
h
?
:
 
n
u
m
b
e
r
;


 
 
/
*
*
 
T
a
i
l
w
i
n
d
 
c
l
a
s
s
 
a
p
p
l
i
e
d
 
t
o
 
t
h
e
 
p
r
o
g
r
e
s
s
 
a
r
c
,
 
e
.
g
.
 
"
s
t
r
o
k
e
-
i
n
d
i
g
o
-
5
0
0
"
.
 
*
/


 
 
p
r
o
g
r
e
s
s
C
l
a
s
s
N
a
m
e
?
:
 
s
t
r
i
n
g
;


 
 
/
*
*
 
T
a
i
l
w
i
n
d
 
c
l
a
s
s
 
a
p
p
l
i
e
d
 
w
h
e
n
 
p
r
o
g
r
e
s
s
 
=
=
=
 
1
0
0
.
 
F
a
l
l
s
 
b
a
c
k
 
t
o
 
p
r
o
g
r
e
s
s
C
l
a
s
s
N
a
m
e
.
 
*
/


 
 
c
o
m
p
l
e
t
e
C
l
a
s
s
N
a
m
e
?
:
 
s
t
r
i
n
g
;


 
 
/
*
*
 
T
a
i
l
w
i
n
d
 
c
l
a
s
s
 
a
p
p
l
i
e
d
 
t
o
 
t
h
e
 
t
r
a
c
k
 
(
b
a
c
k
g
r
o
u
n
d
)
 
c
i
r
c
l
e
.
 
*
/


 
 
t
r
a
c
k
C
l
a
s
s
N
a
m
e
?
:
 
s
t
r
i
n
g
;


 
 
/
*
*
 
T
a
i
l
w
i
n
d
 
c
l
a
s
s
 
a
p
p
l
i
e
d
 
t
o
 
t
h
e
 
%
 
l
a
b
e
l
.
 
*
/


 
 
l
a
b
e
l
C
l
a
s
s
N
a
m
e
?
:
 
s
t
r
i
n
g
;


}




/
*
*


 
*
 
S
h
a
r
e
d
 
c
i
r
c
u
l
a
r
 
p
r
o
g
r
e
s
s
 
r
i
n
g
.
 
C
l
a
m
p
s
 
p
r
o
g
r
e
s
s
 
t
o
 
[
0
,
 
1
0
0
]
 
s
o
 
c
a
l
l
e
r
s
 
c
a
n


 
*
 
p
a
s
s
 
r
a
w
 
r
a
t
i
o
s
 
w
i
t
h
o
u
t
 
w
o
r
r
y
i
n
g
 
a
b
o
u
t
 
o
v
e
r
f
l
o
w
.


 
*
/


e
x
p
o
r
t
 
c
o
n
s
t
 
C
i
r
c
u
l
a
r
P
r
o
g
r
e
s
s
 
=
 
R
e
a
c
t
.
m
e
m
o
(
f
u
n
c
t
i
o
n
 
C
i
r
c
u
l
a
r
P
r
o
g
r
e
s
s
(
{


 
 
p
r
o
g
r
e
s
s
,


 
 
s
i
z
e
 
=
 
5
2
,


 
 
s
t
r
o
k
e
W
i
d
t
h
 
=
 
4
,


 
 
p
r
o
g
r
e
s
s
C
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
s
t
r
o
k
e
-
i
n
d
i
g
o
-
5
0
0
"
,


 
 
c
o
m
p
l
e
t
e
C
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
s
t
r
o
k
e
-
e
m
e
r
a
l
d
-
5
0
0
"
,


 
 
t
r
a
c
k
C
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
s
t
r
o
k
e
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
s
t
r
o
k
e
-
g
r
a
y
-
8
0
0
"
,


 
 
l
a
b
e
l
C
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
t
e
x
t
-
x
s
 
f
o
n
t
-
b
o
l
d
 
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
7
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
3
0
0
"
,


}
:
 
C
i
r
c
u
l
a
r
P
r
o
g
r
e
s
s
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
 
c
l
a
m
p
e
d
 
=
 
M
a
t
h
.
m
i
n
(
1
0
0
,
 
M
a
t
h
.
m
a
x
(
0
,
 
p
r
o
g
r
e
s
s
)
)
;


 
 
c
o
n
s
t
 
r
 
=
 
(
s
i
z
e
 
-
 
s
t
r
o
k
e
W
i
d
t
h
 
-
 
2
)
 
/
 
2
;


 
 
c
o
n
s
t
 
c
i
r
c
 
=
 
2
 
*
 
M
a
t
h
.
P
I
 
*
 
r
;


 
 
c
o
n
s
t
 
o
f
f
s
e
t
 
=
 
c
i
r
c
 
-
 
(
c
l
a
m
p
e
d
 
/
 
1
0
0
)
 
*
 
c
i
r
c
;


 
 
c
o
n
s
t
 
a
r
c
C
l
a
s
s
 
=
 
c
l
a
m
p
e
d
 
=
=
=
 
1
0
0
 
?
 
c
o
m
p
l
e
t
e
C
l
a
s
s
N
a
m
e
 
:
 
p
r
o
g
r
e
s
s
C
l
a
s
s
N
a
m
e
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
d
i
v
 
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
r
e
l
a
t
i
v
e
 
s
h
r
i
n
k
-
0
"
 
s
t
y
l
e
=
{
{
 
w
i
d
t
h
:
 
s
i
z
e
,
 
h
e
i
g
h
t
:
 
s
i
z
e
 
}
}
 
a
r
i
a
-
h
i
d
d
e
n
>


 
 
 
 
 
 
<
s
v
g
 
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
-
r
o
t
a
t
e
-
9
0
"
 
w
i
d
t
h
=
{
s
i
z
e
}
 
h
e
i
g
h
t
=
{
s
i
z
e
}
 
v
i
e
w
B
o
x
=
{
`
0
 
0
 
$
{
s
i
z
e
}
 
$
{
s
i
z
e
}
`
}
>


 
 
 
 
 
 
 
 
<
c
i
r
c
l
e
 
c
x
=
{
s
i
z
e
 
/
 
2
}
 
c
y
=
{
s
i
z
e
 
/
 
2
}
 
r
=
{
r
}
 
f
i
l
l
=
"
n
o
n
e
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
{
t
r
a
c
k
C
l
a
s
s
N
a
m
e
}
 
s
t
r
o
k
e
W
i
d
t
h
=
{
s
t
r
o
k
e
W
i
d
t
h
}
 
/
>


 
 
 
 
 
 
 
 
<
c
i
r
c
l
e


 
 
 
 
 
 
 
 
 
 
c
x
=
{
s
i
z
e
 
/
 
2
}


 
 
 
 
 
 
 
 
 
 
c
y
=
{
s
i
z
e
 
/
 
2
}


 
 
 
 
 
 
 
 
 
 
r
=
{
r
}


 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
"
n
o
n
e
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
{
a
r
c
C
l
a
s
s
}


 
 
 
 
 
 
 
 
 
 
s
t
r
o
k
e
W
i
d
t
h
=
{
s
t
r
o
k
e
W
i
d
t
h
}


 
 
 
 
 
 
 
 
 
 
s
t
r
o
k
e
L
i
n
e
c
a
p
=
"
r
o
u
n
d
"


 
 
 
 
 
 
 
 
 
 
s
t
r
o
k
e
D
a
s
h
a
r
r
a
y
=
{
`
$
{
c
i
r
c
}
`
}


 
 
 
 
 
 
 
 
 
 
s
t
r
o
k
e
D
a
s
h
o
f
f
s
e
t
=
{
o
f
f
s
e
t
}


 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
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
:
 
"
s
t
r
o
k
e
-
d
a
s
h
o
f
f
s
e
t
 
0
.
6
s
 
e
a
s
e
"
 
}
}


 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
<
/
s
v
g
>


 
 
 
 
 
 
<
s
p
a
n
 
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
{
`
a
b
s
o
l
u
t
e
 
i
n
s
e
t
-
0
 
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
j
u
s
t
i
f
y
-
c
e
n
t
e
r
 
$
{
l
a
b
e
l
C
l
a
s
s
N
a
m
e
}
`
}
>


 
 
 
 
 
 
 
 
{
M
a
t
h
.
r
o
u
n
d
(
c
l
a
m
p
e
d
)
}
%


 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}
)
;


