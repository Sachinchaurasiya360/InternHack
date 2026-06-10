
i
m
p
o
r
t
 
{
 
L
i
n
k
 
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
-
r
o
u
t
e
r
"
;


i
m
p
o
r
t
 
{
 
A
r
r
o
w
R
i
g
h
t
,
 
C
l
o
c
k
 
}
 
f
r
o
m
 
"
l
u
c
i
d
e
-
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
 
{
 
t
y
p
e
 
L
e
a
r
n
i
n
g
P
a
t
h
I
t
e
m
S
l
u
g
 
}
 
f
r
o
m
 
"
.
.
/
l
e
a
r
n
i
n
g
-
p
a
t
h
s
.
d
a
t
a
"
;


i
m
p
o
r
t
 
{
 
u
s
e
L
e
a
r
n
i
n
g
P
a
t
h
 
}
 
f
r
o
m
 
"
.
.
/
l
e
a
r
n
i
n
g
-
p
a
t
h
s
.
c
o
n
t
e
x
t
"
;




t
y
p
e
 
P
r
o
p
s
 
=
 
{


 
 
c
u
r
r
e
n
t
S
l
u
g
:
 
L
e
a
r
n
i
n
g
P
a
t
h
I
t
e
m
S
l
u
g
;


 
 
c
o
m
p
l
e
t
e
d
:
 
b
o
o
l
e
a
n
;


 
 
c
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
;




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
 
N
e
x
t
I
n
P
a
t
h
C
a
r
d
(
{
 
c
u
r
r
e
n
t
S
l
u
g
,
 
c
o
m
p
l
e
t
e
d
,
 
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
"
 
}
:
 
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
 
{
 
s
e
l
e
c
t
e
d
P
a
t
h
,
 
g
e
t
N
e
x
t
I
t
e
m
A
f
t
e
r
 
}
 
=
 
u
s
e
L
e
a
r
n
i
n
g
P
a
t
h
(
)
;


 
 
c
o
n
s
t
 
n
e
x
t
I
t
e
m
 
=
 
g
e
t
N
e
x
t
I
t
e
m
A
f
t
e
r
(
c
u
r
r
e
n
t
S
l
u
g
)
;




 
 
i
f
 
(
!
c
o
m
p
l
e
t
e
d
 
|
|
 
!
n
e
x
t
I
t
e
m
)
 
r
e
t
u
r
n
 
n
u
l
l
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
s
e
c
t
i
o
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
m
t
-
8
 
o
v
e
r
f
l
o
w
-
h
i
d
d
e
n
 
r
o
u
n
d
e
d
-
2
x
l
 
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
s
t
o
n
e
-
2
0
0
 
b
g
-
w
h
i
t
e
 
s
h
a
d
o
w
-
s
m
 
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
w
h
i
t
e
/
1
0
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
0
0
 
$
{
c
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
g
r
i
d
 
g
a
p
-
0
 
m
d
:
g
r
i
d
-
c
o
l
s
-
[
m
i
n
m
a
x
(
0
,
1
f
r
)
_
3
0
%
]
"
>


 
 
 
 
 
 
 
 
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
p
-
5
"
>


 
 
 
 
 
 
 
 
 
 
<
p
 
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
b
-
2
 
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
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
N
e
x
t
 
i
n
 
y
o
u
r
 
p
a
t
h


 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
<
h
2
 
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
t
e
x
t
-
x
l
 
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
s
t
o
n
e
-
9
5
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
s
t
o
n
e
-
5
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
n
e
x
t
I
t
e
m
.
t
i
t
l
e
}


 
 
 
 
 
 
 
 
 
 
<
/
h
2
>


 
 
 
 
 
 
 
 
 
 
<
p
 
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
t
-
2
 
t
e
x
t
-
s
m
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
 
t
e
x
t
-
s
t
o
n
e
-
6
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
s
t
o
n
e
-
3
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
n
e
x
t
I
t
e
m
.
d
e
s
c
r
i
p
t
i
o
n
}


 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
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
m
t
-
4
 
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
 
g
a
p
-
3
 
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
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
>
{
s
e
l
e
c
t
e
d
P
a
t
h
.
t
i
t
l
e
}
<
/
s
p
a
n
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
"
h
-
1
 
w
-
1
 
b
g
-
l
i
m
e
-
4
0
0
"
 
/
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
"
i
n
l
i
n
e
-
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
 
g
a
p
-
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
l
o
c
k
 
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
h
-
3
 
w
-
3
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
n
e
x
t
I
t
e
m
.
e
s
t
i
m
a
t
e
d
M
i
n
u
t
e
s
}
 
m
i
n


 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
<
L
i
n
k


 
 
 
 
 
 
 
 
 
 
t
o
=
{
n
e
x
t
I
t
e
m
.
h
r
e
f
}


 
 
 
 
 
 
 
 
 
 
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
g
r
o
u
p
 
f
l
e
x
 
m
i
n
-
h
-
4
0
 
f
l
e
x
-
c
o
l
 
j
u
s
t
i
f
y
-
b
e
t
w
e
e
n
 
b
g
-
s
t
o
n
e
-
9
5
0
 
p
-
5
 
t
e
x
t
-
s
t
o
n
e
-
5
0
 
n
o
-
u
n
d
e
r
l
i
n
e
 
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
 
h
o
v
e
r
:
b
g
-
s
t
o
n
e
-
9
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
s
t
o
n
e
-
5
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
s
t
o
n
e
-
9
5
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
s
t
o
n
e
-
2
0
0
"


 
 
 
 
 
 
 
 
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
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
o
p
a
c
i
t
y
-
7
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
P
r
e
v
i
e
w


 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
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
"
l
i
n
e
-
c
l
a
m
p
-
3
 
t
e
x
t
-
s
m
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
 
o
p
a
c
i
t
y
-
8
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
n
e
x
t
I
t
e
m
.
d
e
s
c
r
i
p
t
i
o
n
}


 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
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
"
i
n
l
i
n
e
-
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
 
g
a
p
-
2
 
t
e
x
t
-
s
m
 
f
o
n
t
-
b
o
l
d
"
>


 
 
 
 
 
 
 
 
 
 
 
 
C
o
n
t
i
n
u
e


 
 
 
 
 
 
 
 
 
 
 
 
<
A
r
r
o
w
R
i
g
h
t
 
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
h
-
4
 
w
-
4
 
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
t
r
a
n
s
f
o
r
m
 
g
r
o
u
p
-
h
o
v
e
r
:
t
r
a
n
s
l
a
t
e
-
x
-
1
"
 
/
>


 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
<
/
L
i
n
k
>


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
<
/
s
e
c
t
i
o
n
>


 
 
)
;


}


