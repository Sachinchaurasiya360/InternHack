
i
m
p
o
r
t
 
{
 
m
o
t
i
o
n
 
}
 
f
r
o
m
 
"
f
r
a
m
e
r
-
m
o
t
i
o
n
"
;


i
m
p
o
r
t
 
{


 
 
B
a
r
C
h
a
r
t
2
,


 
 
S
e
a
r
c
h
,


 
 
A
w
a
r
d
,


 
 
Z
a
p
,


 
 
F
i
l
e
T
e
x
t
,


 
 
T
r
e
n
d
i
n
g
U
p
,


 
 
A
l
i
g
n
L
e
f
t
,


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
 
t
y
p
e
 
{
 
A
t
s
C
a
t
e
g
o
r
y
S
c
o
r
e
s
 
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
 
g
e
t
S
c
o
r
e
T
i
e
r
 
}
 
f
r
o
m
 
"
.
/
S
c
o
r
e
C
i
r
c
l
e
"
;




c
o
n
s
t
 
C
A
T
E
G
O
R
Y
_
L
A
B
E
L
S
:
 
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
s
t
r
i
n
g
>
 
=
 
{


 
 
f
o
r
m
a
t
t
i
n
g
:
 
"
F
o
r
m
a
t
t
i
n
g
"
,


 
 
k
e
y
w
o
r
d
s
:
 
"
K
e
y
w
o
r
d
s
"
,


 
 
e
x
p
e
r
i
e
n
c
e
:
 
"
E
x
p
e
r
i
e
n
c
e
"
,


 
 
s
k
i
l
l
s
:
 
"
S
k
i
l
l
s
"
,


 
 
e
d
u
c
a
t
i
o
n
:
 
"
E
d
u
c
a
t
i
o
n
"
,


 
 
i
m
p
a
c
t
:
 
"
I
m
p
a
c
t
"
,


}
;




c
o
n
s
t
 
C
A
T
E
G
O
R
Y
_
I
C
O
N
S
:
 
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
t
y
p
e
o
f
 
B
a
r
C
h
a
r
t
2
>
 
=
 
{


 
 
f
o
r
m
a
t
t
i
n
g
:
 
A
l
i
g
n
L
e
f
t
,


 
 
k
e
y
w
o
r
d
s
:
 
S
e
a
r
c
h
,


 
 
e
x
p
e
r
i
e
n
c
e
:
 
A
w
a
r
d
,


 
 
s
k
i
l
l
s
:
 
Z
a
p
,


 
 
e
d
u
c
a
t
i
o
n
:
 
F
i
l
e
T
e
x
t
,


 
 
i
m
p
a
c
t
:
 
T
r
e
n
d
i
n
g
U
p
,


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
 
S
c
o
r
e
B
r
e
a
k
d
o
w
n
P
a
n
e
l
(
{


 
 
c
a
t
e
g
o
r
y
S
c
o
r
e
s
,


}
:
 
{


 
 
c
a
t
e
g
o
r
y
S
c
o
r
e
s
:
 
A
t
s
C
a
t
e
g
o
r
y
S
c
o
r
e
s
;


}
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
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
k
e
y
=
"
b
r
e
a
k
d
o
w
n
"


 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
x
:
 
-
8
 
}
}


 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
o
p
a
c
i
t
y
:
 
1
,
 
x
:
 
0
 
}
}


 
 
 
 
 
 
e
x
i
t
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
x
:
 
8
 
}
}


 
 
 
 
 
 
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
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
1
8
 
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
"
s
p
a
c
e
-
y
-
2
.
5
"


 
 
 
 
>


 
 
 
 
 
 
{
O
b
j
e
c
t
.
e
n
t
r
i
e
s
(
c
a
t
e
g
o
r
y
S
c
o
r
e
s
)
.
m
a
p
(
(
[
k
e
y
,
 
s
c
o
r
e
]
)
 
=
>
 
{


 
 
 
 
 
 
 
 
c
o
n
s
t
 
I
c
o
n
 
=
 
C
A
T
E
G
O
R
Y
_
I
C
O
N
S
[
k
e
y
]
 
?
?
 
B
a
r
C
h
a
r
t
2
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
t
i
e
r
 
=
 
g
e
t
S
c
o
r
e
T
i
e
r
(
s
c
o
r
e
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
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
k
e
y
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
 
p
-
3
.
5
 
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
/
6
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
/
4
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
w
-
9
 
h
-
9
 
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
 
s
h
r
i
n
k
-
0
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
I
c
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
"
w
-
4
 
h
-
4
 
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
4
0
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
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
-
1
 
m
i
n
-
w
-
0
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
 
m
b
-
1
.
5
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
C
A
T
E
G
O
R
Y
_
L
A
B
E
L
S
[
k
e
y
]
 
?
?
 
k
e
y
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
{
`
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
a
b
u
l
a
r
-
n
u
m
s
 
$
{
t
i
e
r
.
t
e
x
t
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
c
o
r
e
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
4
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
6
0
0
 
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
n
o
r
m
a
l
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
1
0
0


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
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
d
i
v
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
h
-
1
.
5
 
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
 
d
a
r
k
:
b
g
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
f
u
l
l
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
w
i
d
t
h
:
 
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
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
 
`
$
{
S
t
r
i
n
g
(
s
c
o
r
e
)
}
%
`
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
u
r
a
t
i
o
n
:
 
0
.
9
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
e
l
a
y
:
 
0
.
1
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
e
a
s
e
:
 
"
e
a
s
e
O
u
t
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
h
-
f
u
l
l
 
r
o
u
n
d
e
d
-
f
u
l
l
 
$
{
t
i
e
r
.
b
a
r
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
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
/
d
i
v
>


 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
}
)
}


 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>


 
 
)
;


}


