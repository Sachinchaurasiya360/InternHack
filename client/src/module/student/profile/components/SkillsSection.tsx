
i
m
p
o
r
t
 
{
 
S
h
i
e
l
d
C
h
e
c
k
,
 
X
,
 
P
l
u
s
 
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
 
t
y
p
e
 
{
 
V
e
r
i
f
i
e
d
S
k
i
l
l
 
}
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
.
.
/
l
i
b
/
t
y
p
e
s
"
;


i
m
p
o
r
t
 
{
 
i
n
p
u
t
C
l
a
s
s
 
}
 
f
r
o
m
 
"
.
/
s
t
y
l
e
s
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
 
S
k
i
l
l
s
S
e
c
t
i
o
n
P
r
o
p
s
 
{


 
 
s
k
i
l
l
s
:
 
s
t
r
i
n
g
[
]
;


 
 
s
k
i
l
l
I
n
p
u
t
:
 
s
t
r
i
n
g
;


 
 
s
h
o
w
S
k
i
l
l
S
u
g
g
e
s
t
i
o
n
s
:
 
b
o
o
l
e
a
n
;


 
 
f
i
l
t
e
r
e
d
S
k
i
l
l
S
u
g
g
e
s
t
i
o
n
s
:
 
s
t
r
i
n
g
[
]
;


 
 
v
e
r
i
f
i
e
d
M
a
p
:
 
M
a
p
<
s
t
r
i
n
g
,
 
V
e
r
i
f
i
e
d
S
k
i
l
l
>
;


 
 
s
k
i
l
l
I
n
p
u
t
R
e
f
:
 
R
e
a
c
t
.
R
e
f
O
b
j
e
c
t
<
H
T
M
L
I
n
p
u
t
E
l
e
m
e
n
t
 
|
 
n
u
l
l
>
;


 
 
s
k
i
l
l
D
r
o
p
d
o
w
n
R
e
f
:
 
R
e
a
c
t
.
R
e
f
O
b
j
e
c
t
<
H
T
M
L
D
i
v
E
l
e
m
e
n
t
 
|
 
n
u
l
l
>
;


 
 
o
n
S
k
i
l
l
I
n
p
u
t
C
h
a
n
g
e
:
 
(
v
a
l
u
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
 
v
o
i
d
;


 
 
o
n
S
k
i
l
l
I
n
p
u
t
F
o
c
u
s
:
 
(
)
 
=
>
 
v
o
i
d
;


 
 
o
n
A
d
d
S
k
i
l
l
:
 
(
n
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
)
 
=
>
 
v
o
i
d
;


 
 
o
n
R
e
m
o
v
e
S
k
i
l
l
:
 
(
i
n
d
e
x
:
 
n
u
m
b
e
r
)
 
=
>
 
v
o
i
d
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
 
S
k
i
l
l
s
S
e
c
t
i
o
n
(
{


 
 
s
k
i
l
l
s
,


 
 
s
k
i
l
l
I
n
p
u
t
,


 
 
s
h
o
w
S
k
i
l
l
S
u
g
g
e
s
t
i
o
n
s
,


 
 
f
i
l
t
e
r
e
d
S
k
i
l
l
S
u
g
g
e
s
t
i
o
n
s
,


 
 
v
e
r
i
f
i
e
d
M
a
p
,


 
 
s
k
i
l
l
I
n
p
u
t
R
e
f
,


 
 
s
k
i
l
l
D
r
o
p
d
o
w
n
R
e
f
,


 
 
o
n
S
k
i
l
l
I
n
p
u
t
C
h
a
n
g
e
,


 
 
o
n
S
k
i
l
l
I
n
p
u
t
F
o
c
u
s
,


 
 
o
n
A
d
d
S
k
i
l
l
,


 
 
o
n
R
e
m
o
v
e
S
k
i
l
l
,


}
:
 
S
k
i
l
l
s
S
e
c
t
i
o
n
P
r
o
p
s
)
 
{


 
 
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
p
x
-
5
 
p
y
-
5
 
s
p
a
c
e
-
y
-
4
"
>


 
 
 
 
 
 
{
s
k
i
l
l
s
.
l
e
n
g
t
h
 
>
 
0
 
&
&
 
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
f
l
e
x
 
f
l
e
x
-
w
r
a
p
 
g
a
p
-
1
.
5
"
>


 
 
 
 
 
 
 
 
 
 
{
s
k
i
l
l
s
.
m
a
p
(
(
s
k
i
l
l
,
 
i
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
v
 
=
 
v
e
r
i
f
i
e
d
M
a
p
.
g
e
t
(
s
k
i
l
l
.
t
o
L
o
w
e
r
C
a
s
e
(
)
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
s
p
a
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
i
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
{
`
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
.
5
 
p
x
-
2
.
5
 
p
y
-
1
 
t
e
x
t
-
x
s
 
r
o
u
n
d
e
d
-
m
d
 
b
o
r
d
e
r
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
b
g
-
l
i
m
e
-
5
0
 
d
a
r
k
:
b
g
-
l
i
m
e
-
9
0
0
/
1
0
 
t
e
x
t
-
l
i
m
e
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
l
i
m
e
-
4
0
0
 
b
o
r
d
e
r
-
l
i
m
e
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
l
i
m
e
-
8
0
0
/
4
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
b
g
-
s
t
o
n
e
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
s
t
o
n
e
-
8
0
0
 
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
s
t
o
n
e
-
3
0
0
 
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
v
 
&
&
 
<
S
h
i
e
l
d
C
h
e
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
w
-
3
 
h
-
3
"
 
/
>
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
f
o
n
t
-
m
e
d
i
u
m
"
>
{
s
k
i
l
l
}
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
v
 
&
&
 
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
[
9
p
x
]
 
f
o
n
t
-
m
o
n
o
 
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
{
v
.
s
c
o
r
e
}
%
<
/
s
p
a
n
>
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
b
u
t
t
o
n
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
o
n
R
e
m
o
v
e
S
k
i
l
l
(
i
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
r
i
a
-
l
a
b
e
l
=
{
`
R
e
m
o
v
e
 
$
{
s
k
i
l
l
}
`
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
o
p
a
c
i
t
y
-
6
0
 
h
o
v
e
r
:
o
p
a
c
i
t
y
-
1
0
0
 
b
g
-
t
r
a
n
s
p
a
r
e
n
t
 
b
o
r
d
e
r
-
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
 
p
-
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
X
 
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
w
-
3
 
h
-
3
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
 
 
}
)
}


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
)
}


 
 
 
 
 
 
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
f
l
e
x
 
g
a
p
-
2
"
>


 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
r
e
f
=
{
s
k
i
l
l
I
n
p
u
t
R
e
f
}
 
t
y
p
e
=
"
t
e
x
t
"
 
v
a
l
u
e
=
{
s
k
i
l
l
I
n
p
u
t
}


 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
h
a
n
g
e
=
{
(
e
)
 
=
>
 
o
n
S
k
i
l
l
I
n
p
u
t
C
h
a
n
g
e
(
e
.
t
a
r
g
e
t
.
v
a
l
u
e
)
}


 
 
 
 
 
 
 
 
 
 
 
 
o
n
F
o
c
u
s
=
{
o
n
S
k
i
l
l
I
n
p
u
t
F
o
c
u
s
}


 
 
 
 
 
 
 
 
 
 
 
 
o
n
K
e
y
D
o
w
n
=
{
(
e
)
 
=
>
 
{
 
i
f
 
(
e
.
k
e
y
 
=
=
=
 
"
E
n
t
e
r
"
)
 
{
 
e
.
p
r
e
v
e
n
t
D
e
f
a
u
l
t
(
)
;
 
o
n
A
d
d
S
k
i
l
l
(
)
;
 
}
 
}
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
{
`
$
{
i
n
p
u
t
C
l
a
s
s
}
 
f
l
e
x
-
1
`
}
 
p
l
a
c
e
h
o
l
d
e
r
=
"
T
y
p
e
 
a
 
s
k
i
l
l
 
a
n
d
 
p
r
e
s
s
 
E
n
t
e
r
"
 
a
u
t
o
C
o
m
p
l
e
t
e
=
"
o
f
f
"


 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
b
u
t
t
o
n
"


 
 
 
 
 
 
 
 
 
 
 
 
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
 
o
n
A
d
d
S
k
i
l
l
(
)
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
s
h
r
i
n
k
-
0
 
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
.
5
 
p
x
-
4
 
p
y
-
2
.
5
 
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
3
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
w
h
i
t
e
/
1
0
 
r
o
u
n
d
e
d
-
m
d
 
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
5
0
 
h
o
v
e
r
:
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
9
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
5
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
 
b
g
-
t
r
a
n
s
p
a
r
e
n
t
 
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
"


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
P
l
u
s
 
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
w
-
3
.
5
 
h
-
3
.
5
"
 
/
>
 
A
d
d


 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
{
s
h
o
w
S
k
i
l
l
S
u
g
g
e
s
t
i
o
n
s
 
&
&
 
f
i
l
t
e
r
e
d
S
k
i
l
l
S
u
g
g
e
s
t
i
o
n
s
.
l
e
n
g
t
h
 
>
 
0
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
r
e
f
=
{
s
k
i
l
l
D
r
o
p
d
o
w
n
R
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
a
b
s
o
l
u
t
e
 
z
-
5
0
 
l
e
f
t
-
0
 
r
i
g
h
t
-
1
6
 
t
o
p
-
f
u
l
l
 
m
t
-
1
 
b
g
-
w
h
i
t
e
 
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
 
r
o
u
n
d
e
d
-
m
d
 
s
h
a
d
o
w
-
l
g
 
m
a
x
-
h
-
5
2
 
o
v
e
r
f
l
o
w
-
y
-
a
u
t
o
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
p
x
-
3
 
p
y
-
2
 
t
e
x
t
-
[
1
0
p
x
]
 
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
 
b
o
r
d
e
r
-
b
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
e
r
i
f
i
a
b
l
e
 
s
k
i
l
l
s


 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
{
f
i
l
t
e
r
e
d
S
k
i
l
l
S
u
g
g
e
s
t
i
o
n
s
.
m
a
p
(
(
s
k
i
l
l
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
s
k
i
l
l
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
b
u
t
t
o
n
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
o
n
A
d
d
S
k
i
l
l
(
s
k
i
l
l
)
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
w
-
f
u
l
l
 
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
l
e
f
t
 
p
x
-
3
 
p
y
-
2
 
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
1
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
s
t
o
n
e
-
8
0
0
 
b
o
r
d
e
r
-
0
 
b
g
-
t
r
a
n
s
p
a
r
e
n
t
 
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
 
b
o
r
d
e
r
-
b
 
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
1
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
w
h
i
t
e
/
5
 
l
a
s
t
:
b
o
r
d
e
r
-
b
-
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
S
h
i
e
l
d
C
h
e
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
w
-
3
.
5
 
h
-
3
.
5
 
t
e
x
t
-
l
i
m
e
-
5
0
0
 
s
h
r
i
n
k
-
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
m
e
d
i
u
m
 
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
5
0
"
>
{
s
k
i
l
l
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
t
e
x
t
-
[
9
p
x
]
 
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
l
i
m
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
l
i
m
e
-
4
0
0
 
m
l
-
a
u
t
o
 
s
h
r
i
n
k
-
0
"
>
c
a
n
 
v
e
r
i
f
y
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
{
s
k
i
l
l
s
.
l
e
n
g
t
h
 
>
 
0
 
&
&
 
(


 
 
 
 
 
 
 
 
<
L
i
n
k
 
t
o
=
"
/
s
t
u
d
e
n
t
/
s
k
i
l
l
-
v
e
r
i
f
i
c
a
t
i
o
n
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
.
5
 
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
 
h
o
v
e
r
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
"
>


 
 
 
 
 
 
 
 
 
 
<
S
h
i
e
l
d
C
h
e
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
w
-
3
.
5
 
h
-
3
.
5
"
 
/
>
 
v
e
r
i
f
y
 
s
k
i
l
l
s
 
w
i
t
h
 
p
r
o
c
t
o
r
e
d
 
t
e
s
t
s


 
 
 
 
 
 
 
 
<
/
L
i
n
k
>


 
 
 
 
 
 
)
}


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}


