
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
M
e
m
o
,
 
u
s
e
S
t
a
t
e
 
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
 
{
 
B
o
o
k
O
p
e
n
,
 
C
o
d
e
2
,
 
L
i
g
h
t
b
u
l
b
,
 
P
l
a
y
,
 
T
a
r
g
e
t
 
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
e
s
s
o
n
S
h
e
l
l
,


 
 
t
y
p
e
 
L
e
s
s
o
n
Q
u
i
z
Q
u
e
s
t
i
o
n
,


 
 
t
y
p
e
 
L
e
s
s
o
n
T
a
b
D
e
f
,


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
.
.
/
c
o
m
p
o
n
e
n
t
s
/
d
s
a
-
t
h
e
o
r
y
/
L
e
s
s
o
n
S
h
e
l
l
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
l
g
o
C
a
n
v
a
s
,


 
 
I
n
p
u
t
E
d
i
t
o
r
,


 
 
P
s
e
u
d
o
c
o
d
e
P
a
n
e
l
,


 
 
u
s
e
S
t
e
p
P
l
a
y
e
r
,


 
 
V
a
r
i
a
b
l
e
s
P
a
n
e
l
,


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
.
.
/
c
o
m
p
o
n
e
n
t
s
/
d
s
a
-
t
h
e
o
r
y
/
a
l
g
o
"
;


i
m
p
o
r
t
 
{


 
 
C
a
l
l
o
u
t
,


 
 
C
a
r
d
,


 
 
L
e
d
e
,


 
 
P
i
l
l
B
u
t
t
o
n
,


 
 
S
e
c
t
i
o
n
E
y
e
b
r
o
w
,


 
 
S
e
c
t
i
o
n
T
i
t
l
e
,


 
 
S
u
b
H
e
a
d
i
n
g
,


 
 
T
H
E
M
E
,


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
.
.
/
c
o
m
p
o
n
e
n
t
s
/
d
s
a
-
t
h
e
o
r
y
/
p
r
i
m
i
t
i
v
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
 
P
r
a
c
t
i
c
e
T
a
b
 
}
 
f
r
o
m
 
"
.
.
/
P
r
a
c
t
i
c
e
T
a
b
"
;




c
o
n
s
t
 
P
R
A
C
T
I
C
E
_
T
O
P
I
C
_
S
L
U
G
:
 
s
t
r
i
n
g
 
|
 
n
u
l
l
 
=
 
"
s
t
a
c
k
"
;




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
T
y
p
e
s
 
&
 
h
e
l
p
e
r
s
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




t
y
p
e
 
M
o
d
e
 
=
 
"
n
g
e
"
 
|
 
"
l
r
h
"
;




t
y
p
e
 
C
e
l
l
S
t
a
t
e
 
=
 
"
d
e
f
a
u
l
t
"
 
|
 
"
a
c
t
i
v
e
"
 
|
 
"
c
o
m
p
a
r
e
"
 
|
 
"
d
o
n
e
"
 
|
 
"
w
i
n
d
o
w
"
 
|
 
"
p
a
t
h
"
;




c
o
n
s
t
 
S
T
A
T
E
_
C
O
L
O
R
:
 
R
e
c
o
r
d
<
C
e
l
l
S
t
a
t
e
,
 
{
 
b
g
:
 
s
t
r
i
n
g
;
 
f
g
:
 
s
t
r
i
n
g
;
 
b
o
r
d
e
r
:
 
s
t
r
i
n
g
 
}
>
 
=
 
{


 
 
d
e
f
a
u
l
t
:
 
{
 
b
g
:
 
T
H
E
M
E
.
b
g
,
 
f
g
:
 
T
H
E
M
E
.
t
e
x
t
M
u
t
e
d
,
 
b
o
r
d
e
r
:
 
T
H
E
M
E
.
b
o
r
d
e
r
 
}
,


 
 
a
c
t
i
v
e
:
 
 
{
 
b
g
:
 
T
H
E
M
E
.
a
c
c
e
n
t
,
 
f
g
:
 
"
#
f
f
f
"
,
 
b
o
r
d
e
r
:
 
T
H
E
M
E
.
a
c
c
e
n
t
D
a
r
k
 
}
,


 
 
c
o
m
p
a
r
e
:
 
{
 
b
g
:
 
"
#
c
7
d
2
f
e
"
,
 
f
g
:
 
"
#
3
7
3
0
a
3
"
,
 
b
o
r
d
e
r
:
 
"
#
6
3
6
6
f
1
"
 
}
,


 
 
d
o
n
e
:
 
 
 
 
{
 
b
g
:
 
"
#
d
c
f
c
e
7
"
,
 
f
g
:
 
"
#
1
6
6
5
3
4
"
,
 
b
o
r
d
e
r
:
 
"
#
1
6
a
3
4
a
"
 
}
,


 
 
w
i
n
d
o
w
:
 
 
{
 
b
g
:
 
"
#
d
b
e
a
f
e
"
,
 
f
g
:
 
"
#
1
e
4
0
a
f
"
,
 
b
o
r
d
e
r
:
 
"
#
3
b
8
2
f
6
"
 
}
,


 
 
p
a
t
h
:
 
 
 
 
{
 
b
g
:
 
"
#
f
e
f
9
c
3
"
,
 
f
g
:
 
"
#
7
1
3
f
1
2
"
,
 
b
o
r
d
e
r
:
 
"
#
c
a
8
a
0
4
"
 
}
,


}
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
 
A
r
r
o
w
 
{
 
f
r
o
m
:
 
n
u
m
b
e
r
;
 
t
o
:
 
n
u
m
b
e
r
 
}




i
n
t
e
r
f
a
c
e
 
F
r
a
m
e
 
{


 
 
l
i
n
e
:
 
n
u
m
b
e
r
;


 
 
v
a
r
s
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
 
|
 
n
u
m
b
e
r
 
|
 
u
n
d
e
f
i
n
e
d
>
;


 
 
m
e
s
s
a
g
e
:
 
s
t
r
i
n
g
;


 
 
a
r
r
S
t
a
t
e
s
:
 
C
e
l
l
S
t
a
t
e
[
]
;


 
 
s
t
a
c
k
:
 
{
 
i
d
x
:
 
n
u
m
b
e
r
;
 
v
a
l
:
 
n
u
m
b
e
r
 
}
[
]
;


 
 
r
e
s
u
l
t
:
 
(
n
u
m
b
e
r
 
|
 
n
u
l
l
)
[
]
;


 
 
a
r
r
o
w
s
:
 
A
r
r
o
w
[
]
;


 
 
b
e
s
t
R
e
c
t
:
 
{
 
l
o
:
 
n
u
m
b
e
r
;
 
h
i
:
 
n
u
m
b
e
r
;
 
h
:
 
n
u
m
b
e
r
;
 
a
r
e
a
:
 
n
u
m
b
e
r
 
}
 
|
 
n
u
l
l
;


 
 
f
l
a
s
h
K
e
y
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
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
L
o
c
a
l
 
S
t
a
c
k
C
o
l
u
m
n
 
h
e
l
p
e
r
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
S
t
a
c
k
C
o
l
u
m
n
(
{


 
 
i
t
e
m
s
,


 
 
t
i
t
l
e
 
=
 
"
S
t
a
c
k
"
,


 
 
t
o
p
L
a
b
e
l
 
=
 
"
t
o
p
"
,


 
 
e
m
p
t
y
L
a
b
e
l
 
=
 
"
e
m
p
t
y
"
,


 
 
m
a
x
H
e
i
g
h
t
 
=
 
2
4
0
,


}
:
 
{


 
 
i
t
e
m
s
:
 
{
 
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
;
 
l
a
b
e
l
?
:
 
s
t
r
i
n
g
 
}
[
]
;


 
 
t
i
t
l
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


 
 
t
o
p
L
a
b
e
l
?
:
 
s
t
r
i
n
g
;


 
 
e
m
p
t
y
L
a
b
e
l
?
:
 
s
t
r
i
n
g
;


 
 
m
a
x
H
e
i
g
h
t
?
:
 
n
u
m
b
e
r
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
 
p
-
3
"


 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
m
a
x
H
e
i
g
h
t
,
 
o
v
e
r
f
l
o
w
Y
:
 
"
a
u
t
o
"
,
 
m
i
n
W
i
d
t
h
:
 
1
4
0
 
}
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
 
m
b
-
2
"
>


 
 
 
 
 
 
 
 
{
t
i
t
l
e
}


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
{
i
t
e
m
s
.
l
e
n
g
t
h
 
=
=
=
 
0
 
?
 
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
t
e
x
t
-
x
s
 
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
 
i
t
a
l
i
c
"
>
{
e
m
p
t
y
L
a
b
e
l
}
<
/
d
i
v
>


 
 
 
 
 
 
)
 
:
 
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
c
o
l
-
r
e
v
e
r
s
e
 
g
a
p
-
1
"
>


 
 
 
 
 
 
 
 
 
 
{
i
t
e
m
s
.
m
a
p
(
(
i
t
e
m
,
 
i
)
 
=
>
 
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
 
g
a
p
-
2
 
p
x
-
2
 
p
y
-
1
 
r
o
u
n
d
e
d
 
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
i
t
e
m
.
v
a
l
u
e
}
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
 
=
=
=
 
i
t
e
m
s
.
l
e
n
g
t
h
 
-
 
1
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
1
0
p
x
]
 
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
{
t
o
p
L
a
b
e
l
}
<
/
s
p
a
n
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


 
 
)
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
A
r
r
a
y
B
a
r
s
 
l
o
c
a
l
 
h
e
l
p
e
r
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
A
r
r
a
y
B
a
r
s
(
{


 
 
v
a
l
u
e
s
,


 
 
s
t
a
t
e
s
,


 
 
h
e
i
g
h
t
 
=
 
1
2
0
,


}
:
 
{


 
 
v
a
l
u
e
s
:
 
n
u
m
b
e
r
[
]
;


 
 
s
t
a
t
e
s
:
 
C
e
l
l
S
t
a
t
e
[
]
;


 
 
h
e
i
g
h
t
?
:
 
n
u
m
b
e
r
;


}
)
 
{


 
 
c
o
n
s
t
 
m
a
x
V
a
l
 
=
 
M
a
t
h
.
m
a
x
(
1
,
 
.
.
.
v
a
l
u
e
s
)
;


 
 
c
o
n
s
t
 
b
a
r
W
 
=
 
M
a
t
h
.
m
a
x
(
2
8
,
 
M
a
t
h
.
m
i
n
(
5
6
,
 
M
a
t
h
.
f
l
o
o
r
(
5
0
0
 
/
 
M
a
t
h
.
m
a
x
(
v
a
l
u
e
s
.
l
e
n
g
t
h
,
 
1
)
)
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
 
i
t
e
m
s
-
e
n
d
 
g
a
p
-
1
 
o
v
e
r
f
l
o
w
-
x
-
a
u
t
o
 
p
b
-
1
"


 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
h
e
i
g
h
t
,
 
a
l
i
g
n
I
t
e
m
s
:
 
"
f
l
e
x
-
e
n
d
"
 
}
}


 
 
 
 
>


 
 
 
 
 
 
{
v
a
l
u
e
s
.
m
a
p
(
(
v
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
 
c
o
l
 
=
 
S
T
A
T
E
_
C
O
L
O
R
[
s
t
a
t
e
s
[
i
]
 
?
?
 
"
d
e
f
a
u
l
t
"
]
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
b
h
 
=
 
M
a
t
h
.
m
a
x
(
6
,
 
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
(
v
 
/
 
m
a
x
V
a
l
)
 
*
 
(
h
e
i
g
h
t
 
-
 
2
8
)
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
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
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
c
o
l
 
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
0
.
5
 
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
 
b
a
r
W
 
}
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
c
e
n
t
e
r
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
c
o
l
.
f
g
 
!
=
=
 
"
#
f
f
f
"
 
?
 
T
H
E
M
E
.
t
e
x
t
 
:
 
T
H
E
M
E
.
a
c
c
e
n
t
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
v
}


 
 
 
 
 
 
 
 
 
 
 
 
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
 
b
a
r
W
 
-
 
4
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
e
i
g
h
t
:
 
b
h
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
:
 
c
o
l
.
b
g
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
`
1
.
5
p
x
 
s
o
l
i
d
 
$
{
c
o
l
.
b
o
r
d
e
r
}
`
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
4
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
a
l
l
 
0
.
3
s
 
e
a
s
e
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
/
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
>
[
{
i
}
]
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
d
i
v
>


 
 
)
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
P
s
e
u
d
o
c
o
d
e
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




c
o
n
s
t
 
P
S
E
U
D
O
_
N
G
E
 
=
 
[


 
 
"
f
u
n
c
t
i
o
n
 
n
e
x
t
G
r
e
a
t
e
r
(
A
)
:
"
,


 
 
"
 
 
s
t
a
c
k
 
←
 
[
]
;
 
r
e
s
u
l
t
 
←
 
[
-
1
]
 
*
 
n
"
,


 
 
"
 
 
f
o
r
 
i
 
i
n
 
0
.
.
n
-
1
:
"
,


 
 
"
 
 
 
 
w
h
i
l
e
 
s
t
a
c
k
 
n
o
t
 
e
m
p
t
y
 
a
n
d
 
A
[
s
t
a
c
k
.
t
o
p
]
 
<
 
A
[
i
]
:
"
,


 
 
"
 
 
 
 
 
 
j
 
←
 
s
t
a
c
k
.
p
o
p
(
)
"
,


 
 
"
 
 
 
 
 
 
r
e
s
u
l
t
[
j
]
 
←
 
A
[
i
]
"
,


 
 
"
 
 
 
 
s
t
a
c
k
.
p
u
s
h
(
i
)
"
,


 
 
"
 
 
r
e
t
u
r
n
 
r
e
s
u
l
t
"
,


]
;




c
o
n
s
t
 
P
S
E
U
D
O
_
L
R
H
 
=
 
[


 
 
"
f
u
n
c
t
i
o
n
 
l
a
r
g
e
s
t
R
e
c
t
a
n
g
l
e
(
H
)
:
"
,


 
 
"
 
 
s
t
a
c
k
 
←
 
[
]
;
 
b
e
s
t
 
←
 
0
"
,


 
 
"
 
 
f
o
r
 
i
 
i
n
 
0
.
.
n
:
 
 
 
/
/
 
s
e
n
t
i
n
e
l
 
a
t
 
n
"
,


 
 
"
 
 
 
 
h
 
←
 
(
i
 
=
=
 
n
)
 
?
 
0
 
:
 
H
[
i
]
"
,


 
 
"
 
 
 
 
w
h
i
l
e
 
s
t
a
c
k
 
n
o
t
 
e
m
p
t
y
 
a
n
d
 
H
[
s
t
a
c
k
.
t
o
p
]
 
>
 
h
:
"
,


 
 
"
 
 
 
 
 
 
t
o
p
 
←
 
s
t
a
c
k
.
p
o
p
(
)
"
,


 
 
"
 
 
 
 
 
 
w
i
d
t
h
 
←
 
s
t
a
c
k
 
e
m
p
t
y
 
?
 
i
 
:
 
i
 
-
 
s
t
a
c
k
.
t
o
p
 
-
 
1
"
,


 
 
"
 
 
 
 
 
 
b
e
s
t
 
←
 
m
a
x
(
b
e
s
t
,
 
H
[
t
o
p
]
 
*
 
w
i
d
t
h
)
"
,


 
 
"
 
 
 
 
s
t
a
c
k
.
p
u
s
h
(
i
)
"
,


 
 
"
 
 
r
e
t
u
r
n
 
b
e
s
t
"
,


]
;




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
F
r
a
m
e
 
b
u
i
l
d
e
r
s
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
b
u
i
l
d
F
r
a
m
e
s
N
G
E
(
A
:
 
n
u
m
b
e
r
[
]
)
:
 
F
r
a
m
e
[
]
 
{


 
 
c
o
n
s
t
 
n
 
=
 
A
.
l
e
n
g
t
h
;


 
 
c
o
n
s
t
 
f
:
 
F
r
a
m
e
[
]
 
=
 
[
]
;


 
 
c
o
n
s
t
 
s
t
a
c
k
:
 
{
 
i
d
x
:
 
n
u
m
b
e
r
;
 
v
a
l
:
 
n
u
m
b
e
r
 
}
[
]
 
=
 
[
]
;


 
 
c
o
n
s
t
 
r
e
s
u
l
t
:
 
(
n
u
m
b
e
r
 
|
 
n
u
l
l
)
[
]
 
=
 
A
r
r
a
y
(
n
)
.
f
i
l
l
(
n
u
l
l
)
;


 
 
c
o
n
s
t
 
b
a
s
e
 
=
 
(
)
 
=
>
 
A
r
r
a
y
<
C
e
l
l
S
t
a
t
e
>
(
n
)
.
f
i
l
l
(
"
d
e
f
a
u
l
t
"
)
;




 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
0
,
 
v
a
r
s
:
 
{
 
n
 
}
,
 
m
e
s
s
a
g
e
:
 
`
F
i
n
d
 
t
h
e
 
n
e
x
t
 
g
r
e
a
t
e
r
 
e
l
e
m
e
n
t
 
f
o
r
 
e
a
c
h
 
i
t
e
m
 
i
n
 
[
$
{
A
.
j
o
i
n
(
"
,
"
)
}
]
.
`
,
 
a
r
r
S
t
a
t
e
s
:
 
b
a
s
e
(
)
,
 
s
t
a
c
k
:
 
[
]
,
 
r
e
s
u
l
t
:
 
[
.
.
.
r
e
s
u
l
t
]
,
 
a
r
r
o
w
s
:
 
[
]
,
 
b
e
s
t
R
e
c
t
:
 
n
u
l
l
 
}
)
;


 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
1
,
 
v
a
r
s
:
 
{
 
s
t
a
c
k
:
 
"
[
]
"
 
}
,
 
f
l
a
s
h
K
e
y
:
 
"
s
t
a
c
k
"
,
 
m
e
s
s
a
g
e
:
 
"
S
t
a
c
k
 
i
s
 
e
m
p
t
y
;
 
r
e
s
u
l
t
 
i
n
i
t
i
a
l
i
z
e
d
 
t
o
 
-
1
.
"
,
 
a
r
r
S
t
a
t
e
s
:
 
b
a
s
e
(
)
,
 
s
t
a
c
k
:
 
[
]
,
 
r
e
s
u
l
t
:
 
[
.
.
.
r
e
s
u
l
t
]
,
 
a
r
r
o
w
s
:
 
[
]
,
 
b
e
s
t
R
e
c
t
:
 
n
u
l
l
 
}
)
;




 
 
f
o
r
 
(
l
e
t
 
i
 
=
 
0
;
 
i
 
<
 
n
;
 
i
+
+
)
 
{


 
 
 
 
c
o
n
s
t
 
s
t
 
=
 
b
a
s
e
(
)
;
 
s
t
[
i
]
 
=
 
"
a
c
t
i
v
e
"
;


 
 
 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
2
,
 
v
a
r
s
:
 
{
 
i
,
 
"
A
[
i
]
"
:
 
A
[
i
]
 
}
,
 
f
l
a
s
h
K
e
y
:
 
"
i
"
,
 
m
e
s
s
a
g
e
:
 
`
S
c
a
n
 
i
=
$
{
i
}
,
 
A
[
i
]
=
$
{
A
[
i
]
}
.
`
,
 
a
r
r
S
t
a
t
e
s
:
 
s
t
,
 
s
t
a
c
k
:
 
[
.
.
.
s
t
a
c
k
]
,
 
r
e
s
u
l
t
:
 
[
.
.
.
r
e
s
u
l
t
]
,
 
a
r
r
o
w
s
:
 
[
]
,
 
b
e
s
t
R
e
c
t
:
 
n
u
l
l
 
}
)
;


 
 
 
 
c
o
n
s
t
 
a
r
r
o
w
s
:
 
A
r
r
o
w
[
]
 
=
 
[
]
;


 
 
 
 
w
h
i
l
e
 
(
s
t
a
c
k
.
l
e
n
g
t
h
 
&
&
 
s
t
a
c
k
[
s
t
a
c
k
.
l
e
n
g
t
h
 
-
 
1
]
.
v
a
l
 
<
 
A
[
i
]
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
s
t
2
 
=
 
b
a
s
e
(
)
;
 
s
t
2
[
i
]
 
=
 
"
a
c
t
i
v
e
"
;


 
 
 
 
 
 
s
t
a
c
k
.
f
o
r
E
a
c
h
(
(
s
)
 
=
>
 
(
s
t
2
[
s
.
i
d
x
]
 
=
 
"
c
o
m
p
a
r
e
"
)
)
;


 
 
 
 
 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
3
,
 
v
a
r
s
:
 
{
 
t
o
p
:
 
s
t
a
c
k
[
s
t
a
c
k
.
l
e
n
g
t
h
 
-
 
1
]
.
i
d
x
,
 
"
A
[
t
o
p
]
"
:
 
s
t
a
c
k
[
s
t
a
c
k
.
l
e
n
g
t
h
 
-
 
1
]
.
v
a
l
,
 
"
A
[
i
]
"
:
 
A
[
i
]
 
}
,
 
m
e
s
s
a
g
e
:
 
`
A
[
t
o
p
]
=
$
{
s
t
a
c
k
[
s
t
a
c
k
.
l
e
n
g
t
h
 
-
 
1
]
.
v
a
l
}
 
<
 
A
[
i
]
=
$
{
A
[
i
]
}
 
-
 
p
o
p
.
`
,
 
a
r
r
S
t
a
t
e
s
:
 
s
t
2
,
 
s
t
a
c
k
:
 
[
.
.
.
s
t
a
c
k
]
,
 
r
e
s
u
l
t
:
 
[
.
.
.
r
e
s
u
l
t
]
,
 
a
r
r
o
w
s
,
 
b
e
s
t
R
e
c
t
:
 
n
u
l
l
 
}
)
;


 
 
 
 
 
 
c
o
n
s
t
 
j
 
=
 
s
t
a
c
k
.
p
o
p
(
)
!
;


 
 
 
 
 
 
r
e
s
u
l
t
[
j
.
i
d
x
]
 
=
 
A
[
i
]
;


 
 
 
 
 
 
a
r
r
o
w
s
.
p
u
s
h
(
{
 
f
r
o
m
:
 
j
.
i
d
x
,
 
t
o
:
 
i
 
}
)
;


 
 
 
 
 
 
c
o
n
s
t
 
s
t
3
 
=
 
b
a
s
e
(
)
;
 
s
t
3
[
i
]
 
=
 
"
a
c
t
i
v
e
"
;
 
s
t
3
[
j
.
i
d
x
]
 
=
 
"
d
o
n
e
"
;


 
 
 
 
 
 
s
t
a
c
k
.
f
o
r
E
a
c
h
(
(
s
)
 
=
>
 
(
s
t
3
[
s
.
i
d
x
]
 
=
 
"
w
i
n
d
o
w
"
)
)
;


 
 
 
 
 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
5
,
 
v
a
r
s
:
 
{
 
j
:
 
j
.
i
d
x
,
 
"
r
e
s
u
l
t
[
j
]
"
:
 
A
[
i
]
 
}
,
 
f
l
a
s
h
K
e
y
:
 
"
r
e
s
u
l
t
"
,
 
m
e
s
s
a
g
e
:
 
`
r
e
s
u
l
t
[
$
{
j
.
i
d
x
}
]
 
=
 
$
{
A
[
i
]
}
 
(
A
[
$
{
j
.
i
d
x
}
]
=
$
{
j
.
v
a
l
}
'
s
 
n
e
x
t
 
g
r
e
a
t
e
r
)
.
`
,
 
a
r
r
S
t
a
t
e
s
:
 
s
t
3
,
 
s
t
a
c
k
:
 
[
.
.
.
s
t
a
c
k
]
,
 
r
e
s
u
l
t
:
 
[
.
.
.
r
e
s
u
l
t
]
,
 
a
r
r
o
w
s
:
 
[
.
.
.
a
r
r
o
w
s
]
,
 
b
e
s
t
R
e
c
t
:
 
n
u
l
l
 
}
)
;


 
 
 
 
}


 
 
 
 
s
t
a
c
k
.
p
u
s
h
(
{
 
i
d
x
:
 
i
,
 
v
a
l
:
 
A
[
i
]
 
}
)
;


 
 
 
 
c
o
n
s
t
 
s
t
E
n
d
 
=
 
b
a
s
e
(
)
;
 
s
t
E
n
d
[
i
]
 
=
 
"
w
i
n
d
o
w
"
;


 
 
 
 
s
t
a
c
k
.
f
o
r
E
a
c
h
(
(
s
)
 
=
>
 
(
s
t
E
n
d
[
s
.
i
d
x
]
 
=
 
"
w
i
n
d
o
w
"
)
)
;


 
 
 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
6
,
 
v
a
r
s
:
 
{
 
p
u
s
h
e
d
:
 
i
 
}
,
 
f
l
a
s
h
K
e
y
:
 
"
s
t
a
c
k
"
,
 
m
e
s
s
a
g
e
:
 
`
P
u
s
h
 
i
=
$
{
i
}
 
o
n
t
o
 
s
t
a
c
k
.
 
S
t
a
c
k
 
h
o
l
d
s
 
i
n
d
i
c
e
s
 
w
a
i
t
i
n
g
 
f
o
r
 
t
h
e
i
r
 
n
e
x
t
 
g
r
e
a
t
e
r
.
`
,
 
a
r
r
S
t
a
t
e
s
:
 
s
t
E
n
d
,
 
s
t
a
c
k
:
 
[
.
.
.
s
t
a
c
k
]
,
 
r
e
s
u
l
t
:
 
[
.
.
.
r
e
s
u
l
t
]
,
 
a
r
r
o
w
s
:
 
[
.
.
.
a
r
r
o
w
s
]
,
 
b
e
s
t
R
e
c
t
:
 
n
u
l
l
 
}
)
;


 
 
}


 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
7
,
 
v
a
r
s
:
 
{
 
r
e
s
u
l
t
:
 
`
[
$
{
r
e
s
u
l
t
.
m
a
p
(
(
x
)
 
=
>
 
x
 
?
?
 
-
1
)
.
j
o
i
n
(
"
,
"
)
}
]
`
 
}
,
 
m
e
s
s
a
g
e
:
 
`
D
o
n
e
.
 
I
t
e
m
s
 
s
t
i
l
l
 
o
n
 
s
t
a
c
k
 
h
a
d
 
n
o
 
n
e
x
t
 
g
r
e
a
t
e
r
.
`
,
 
a
r
r
S
t
a
t
e
s
:
 
b
a
s
e
(
)
,
 
s
t
a
c
k
:
 
[
.
.
.
s
t
a
c
k
]
,
 
r
e
s
u
l
t
:
 
[
.
.
.
r
e
s
u
l
t
]
,
 
a
r
r
o
w
s
:
 
[
]
,
 
b
e
s
t
R
e
c
t
:
 
n
u
l
l
 
}
)
;


 
 
r
e
t
u
r
n
 
f
;


}




f
u
n
c
t
i
o
n
 
b
u
i
l
d
F
r
a
m
e
s
L
R
H
(
H
:
 
n
u
m
b
e
r
[
]
)
:
 
F
r
a
m
e
[
]
 
{


 
 
c
o
n
s
t
 
n
 
=
 
H
.
l
e
n
g
t
h
;


 
 
c
o
n
s
t
 
f
:
 
F
r
a
m
e
[
]
 
=
 
[
]
;


 
 
c
o
n
s
t
 
s
t
a
c
k
:
 
{
 
i
d
x
:
 
n
u
m
b
e
r
;
 
v
a
l
:
 
n
u
m
b
e
r
 
}
[
]
 
=
 
[
]
;


 
 
l
e
t
 
b
e
s
t
 
=
 
0
;


 
 
l
e
t
 
b
e
s
t
R
e
c
t
:
 
F
r
a
m
e
[
"
b
e
s
t
R
e
c
t
"
]
 
=
 
n
u
l
l
;


 
 
c
o
n
s
t
 
b
a
s
e
 
=
 
(
)
 
=
>
 
A
r
r
a
y
<
C
e
l
l
S
t
a
t
e
>
(
n
)
.
f
i
l
l
(
"
d
e
f
a
u
l
t
"
)
;




 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
0
,
 
v
a
r
s
:
 
{
 
n
 
}
,
 
m
e
s
s
a
g
e
:
 
`
H
i
s
t
o
g
r
a
m
 
h
e
i
g
h
t
s
 
=
 
[
$
{
H
.
j
o
i
n
(
"
,
"
)
}
]
.
 
F
i
n
d
 
t
h
e
 
l
a
r
g
e
s
t
 
r
e
c
t
a
n
g
l
e
.
`
,
 
a
r
r
S
t
a
t
e
s
:
 
b
a
s
e
(
)
,
 
s
t
a
c
k
:
 
[
]
,
 
r
e
s
u
l
t
:
 
[
]
,
 
a
r
r
o
w
s
:
 
[
]
,
 
b
e
s
t
R
e
c
t
:
 
n
u
l
l
 
}
)
;


 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
1
,
 
v
a
r
s
:
 
{
 
b
e
s
t
 
}
,
 
f
l
a
s
h
K
e
y
:
 
"
b
e
s
t
"
,
 
m
e
s
s
a
g
e
:
 
"
S
t
a
c
k
 
e
m
p
t
y
,
 
b
e
s
t
=
0
.
"
,
 
a
r
r
S
t
a
t
e
s
:
 
b
a
s
e
(
)
,
 
s
t
a
c
k
:
 
[
]
,
 
r
e
s
u
l
t
:
 
[
]
,
 
a
r
r
o
w
s
:
 
[
]
,
 
b
e
s
t
R
e
c
t
:
 
n
u
l
l
 
}
)
;




 
 
f
o
r
 
(
l
e
t
 
i
 
=
 
0
;
 
i
 
<
=
 
n
;
 
i
+
+
)
 
{


 
 
 
 
c
o
n
s
t
 
h
 
=
 
i
 
=
=
=
 
n
 
?
 
0
 
:
 
H
[
i
]
;


 
 
 
 
c
o
n
s
t
 
s
t
 
=
 
b
a
s
e
(
)
;


 
 
 
 
i
f
 
(
i
 
<
 
n
)
 
s
t
[
i
]
 
=
 
"
a
c
t
i
v
e
"
;


 
 
 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
2
,
 
v
a
r
s
:
 
{
 
i
,
 
h
 
}
,
 
f
l
a
s
h
K
e
y
:
 
"
i
"
,
 
m
e
s
s
a
g
e
:
 
i
 
=
=
=
 
n
 
?
 
"
S
e
n
t
i
n
e
l
 
i
=
n
 
(
h
=
0
)
 
-
 
f
l
u
s
h
 
r
e
m
a
i
n
i
n
g
 
s
t
a
c
k
.
"
 
:
 
`
S
c
a
n
 
i
=
$
{
i
}
,
 
h
=
$
{
h
}
.
`
,
 
a
r
r
S
t
a
t
e
s
:
 
s
t
,
 
s
t
a
c
k
:
 
[
.
.
.
s
t
a
c
k
]
,
 
r
e
s
u
l
t
:
 
[
]
,
 
a
r
r
o
w
s
:
 
[
]
,
 
b
e
s
t
R
e
c
t
 
}
)
;


 
 
 
 
w
h
i
l
e
 
(
s
t
a
c
k
.
l
e
n
g
t
h
 
&
&
 
s
t
a
c
k
[
s
t
a
c
k
.
l
e
n
g
t
h
 
-
 
1
]
.
v
a
l
 
>
 
h
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
s
t
2
 
=
 
b
a
s
e
(
)
;


 
 
 
 
 
 
i
f
 
(
i
 
<
 
n
)
 
s
t
2
[
i
]
 
=
 
"
a
c
t
i
v
e
"
;


 
 
 
 
 
 
s
t
a
c
k
.
f
o
r
E
a
c
h
(
(
s
)
 
=
>
 
(
s
t
2
[
s
.
i
d
x
]
 
=
 
"
c
o
m
p
a
r
e
"
)
)
;


 
 
 
 
 
 
c
o
n
s
t
 
t
o
p
 
=
 
s
t
a
c
k
[
s
t
a
c
k
.
l
e
n
g
t
h
 
-
 
1
]
;


 
 
 
 
 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
4
,
 
v
a
r
s
:
 
{
 
t
o
p
:
 
t
o
p
.
i
d
x
,
 
"
H
[
t
o
p
]
"
:
 
t
o
p
.
v
a
l
,
 
h
 
}
,
 
m
e
s
s
a
g
e
:
 
`
H
[
t
o
p
]
=
$
{
t
o
p
.
v
a
l
}
 
>
 
h
=
$
{
h
}
 
-
 
p
o
p
 
a
n
d
 
c
o
m
p
u
t
e
 
i
t
s
 
r
e
c
t
.
`
,
 
a
r
r
S
t
a
t
e
s
:
 
s
t
2
,
 
s
t
a
c
k
:
 
[
.
.
.
s
t
a
c
k
]
,
 
r
e
s
u
l
t
:
 
[
]
,
 
a
r
r
o
w
s
:
 
[
]
,
 
b
e
s
t
R
e
c
t
 
}
)
;


 
 
 
 
 
 
s
t
a
c
k
.
p
o
p
(
)
;


 
 
 
 
 
 
c
o
n
s
t
 
l
e
f
t
B
o
u
n
d
 
=
 
s
t
a
c
k
.
l
e
n
g
t
h
 
?
 
s
t
a
c
k
[
s
t
a
c
k
.
l
e
n
g
t
h
 
-
 
1
]
.
i
d
x
 
+
 
1
 
:
 
0
;


 
 
 
 
 
 
c
o
n
s
t
 
r
i
g
h
t
B
o
u
n
d
 
=
 
i
 
-
 
1
;


 
 
 
 
 
 
c
o
n
s
t
 
w
i
d
t
h
 
=
 
r
i
g
h
t
B
o
u
n
d
 
-
 
l
e
f
t
B
o
u
n
d
 
+
 
1
;


 
 
 
 
 
 
c
o
n
s
t
 
a
r
e
a
 
=
 
t
o
p
.
v
a
l
 
*
 
w
i
d
t
h
;


 
 
 
 
 
 
c
o
n
s
t
 
s
t
3
 
=
 
b
a
s
e
(
)
;


 
 
 
 
 
 
i
f
 
(
i
 
<
 
n
)
 
s
t
3
[
i
]
 
=
 
"
a
c
t
i
v
e
"
;


 
 
 
 
 
 
f
o
r
 
(
l
e
t
 
k
 
=
 
l
e
f
t
B
o
u
n
d
;
 
k
 
<
=
 
r
i
g
h
t
B
o
u
n
d
;
 
k
+
+
)
 
s
t
3
[
k
]
 
=
 
"
p
a
t
h
"
;


 
 
 
 
 
 
s
t
a
c
k
.
f
o
r
E
a
c
h
(
(
s
)
 
=
>
 
(
s
t
3
[
s
.
i
d
x
]
 
=
 
"
w
i
n
d
o
w
"
)
)
;


 
 
 
 
 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
6
,
 
v
a
r
s
:
 
{
 
t
o
p
:
 
t
o
p
.
i
d
x
,
 
w
i
d
t
h
,
 
a
r
e
a
,
 
b
e
s
t
 
}
,
 
f
l
a
s
h
K
e
y
:
 
"
a
r
e
a
"
,
 
m
e
s
s
a
g
e
:
 
`
W
i
d
t
h
 
=
 
$
{
w
i
d
t
h
}
,
 
a
r
e
a
 
=
 
$
{
t
o
p
.
v
a
l
}
 
x
 
$
{
w
i
d
t
h
}
 
=
 
$
{
a
r
e
a
}
.
`
,
 
a
r
r
S
t
a
t
e
s
:
 
s
t
3
,
 
s
t
a
c
k
:
 
[
.
.
.
s
t
a
c
k
]
,
 
r
e
s
u
l
t
:
 
[
]
,
 
a
r
r
o
w
s
:
 
[
]
,
 
b
e
s
t
R
e
c
t
:
 
{
 
l
o
:
 
l
e
f
t
B
o
u
n
d
,
 
h
i
:
 
r
i
g
h
t
B
o
u
n
d
,
 
h
:
 
t
o
p
.
v
a
l
,
 
a
r
e
a
 
}
 
}
)
;


 
 
 
 
 
 
i
f
 
(
a
r
e
a
 
>
 
b
e
s
t
)
 
{


 
 
 
 
 
 
 
 
b
e
s
t
 
=
 
a
r
e
a
;


 
 
 
 
 
 
 
 
b
e
s
t
R
e
c
t
 
=
 
{
 
l
o
:
 
l
e
f
t
B
o
u
n
d
,
 
h
i
:
 
r
i
g
h
t
B
o
u
n
d
,
 
h
:
 
t
o
p
.
v
a
l
,
 
a
r
e
a
 
}
;


 
 
 
 
 
 
 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
6
,
 
v
a
r
s
:
 
{
 
b
e
s
t
 
}
,
 
f
l
a
s
h
K
e
y
:
 
"
b
e
s
t
"
,
 
m
e
s
s
a
g
e
:
 
`
N
e
w
 
b
e
s
t
!
 
b
e
s
t
=
$
{
b
e
s
t
}
.
`
,
 
a
r
r
S
t
a
t
e
s
:
 
s
t
3
,
 
s
t
a
c
k
:
 
[
.
.
.
s
t
a
c
k
]
,
 
r
e
s
u
l
t
:
 
[
]
,
 
a
r
r
o
w
s
:
 
[
]
,
 
b
e
s
t
R
e
c
t
 
}
)
;


 
 
 
 
 
 
}


 
 
 
 
}


 
 
 
 
i
f
 
(
i
 
<
 
n
)
 
{


 
 
 
 
 
 
s
t
a
c
k
.
p
u
s
h
(
{
 
i
d
x
:
 
i
,
 
v
a
l
:
 
h
 
}
)
;


 
 
 
 
 
 
c
o
n
s
t
 
s
t
E
n
d
 
=
 
b
a
s
e
(
)
;


 
 
 
 
 
 
s
t
a
c
k
.
f
o
r
E
a
c
h
(
(
s
)
 
=
>
 
(
s
t
E
n
d
[
s
.
i
d
x
]
 
=
 
"
w
i
n
d
o
w
"
)
)
;


 
 
 
 
 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
7
,
 
v
a
r
s
:
 
{
 
p
u
s
h
e
d
:
 
i
 
}
,
 
f
l
a
s
h
K
e
y
:
 
"
s
t
a
c
k
"
,
 
m
e
s
s
a
g
e
:
 
`
P
u
s
h
 
i
=
$
{
i
}
.
 
S
t
a
c
k
 
h
e
i
g
h
t
s
 
s
t
a
y
 
m
o
n
o
t
o
n
i
c
a
l
l
y
 
i
n
c
r
e
a
s
i
n
g
.
`
,
 
a
r
r
S
t
a
t
e
s
:
 
s
t
E
n
d
,
 
s
t
a
c
k
:
 
[
.
.
.
s
t
a
c
k
]
,
 
r
e
s
u
l
t
:
 
[
]
,
 
a
r
r
o
w
s
:
 
[
]
,
 
b
e
s
t
R
e
c
t
 
}
)
;


 
 
 
 
}


 
 
}


 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
8
,
 
v
a
r
s
:
 
{
 
b
e
s
t
 
}
,
 
f
l
a
s
h
K
e
y
:
 
"
b
e
s
t
"
,
 
m
e
s
s
a
g
e
:
 
`
D
o
n
e
.
 
L
a
r
g
e
s
t
 
r
e
c
t
a
n
g
l
e
 
a
r
e
a
 
=
 
$
{
b
e
s
t
}
.
`
,
 
a
r
r
S
t
a
t
e
s
:
 
b
a
s
e
(
)
,
 
s
t
a
c
k
:
 
[
]
,
 
r
e
s
u
l
t
:
 
[
]
,
 
a
r
r
o
w
s
:
 
[
]
,
 
b
e
s
t
R
e
c
t
 
}
)
;


 
 
r
e
t
u
r
n
 
f
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
V
i
s
u
a
l
i
z
e
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
p
a
r
s
e
A
r
r
(
s
:
 
s
t
r
i
n
g
)
:
 
n
u
m
b
e
r
[
]
 
|
 
n
u
l
l
 
{


 
 
c
o
n
s
t
 
n
u
m
s
 
=
 
s
.
s
p
l
i
t
(
/
[
,
\
s
]
+
/
)
.
m
a
p
(
(
t
)
 
=
>
 
t
.
t
r
i
m
(
)
)
.
f
i
l
t
e
r
(
B
o
o
l
e
a
n
)
.
m
a
p
(
N
u
m
b
e
r
)
;


 
 
i
f
 
(
n
u
m
s
.
s
o
m
e
(
(
x
)
 
=
>
 
!
N
u
m
b
e
r
.
i
s
F
i
n
i
t
e
(
x
)
)
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
 
n
u
m
s
.
s
l
i
c
e
(
0
,
 
1
2
)
;


}




f
u
n
c
t
i
o
n
 
M
o
n
o
t
o
n
i
c
V
i
z
(
{
 
f
r
a
m
e
,
 
A
:
 
a
r
r
,
 
m
o
d
e
 
}
:
 
{
 
f
r
a
m
e
:
 
F
r
a
m
e
;
 
A
:
 
n
u
m
b
e
r
[
]
;
 
m
o
d
e
:
 
M
o
d
e
 
}
)
 
{


 
 
c
o
n
s
t
 
s
t
a
c
k
I
t
e
m
s
 
=
 
f
r
a
m
e
.
s
t
a
c
k
.
m
a
p
(
(
s
)
 
=
>
 
(
{
 
v
a
l
u
e
:
 
`
[
$
{
s
.
i
d
x
}
]
=
$
{
s
.
v
a
l
}
`
 
}
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
c
o
l
 
g
a
p
-
4
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
g
r
i
d
 
g
a
p
-
5
"
 
s
t
y
l
e
=
{
{
 
g
r
i
d
T
e
m
p
l
a
t
e
C
o
l
u
m
n
s
:
 
"
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
 
1
7
0
p
x
"
 
}
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
f
l
e
x
 
f
l
e
x
-
c
o
l
 
g
a
p
-
4
"
>


 
 
 
 
 
 
 
 
 
 
<
A
r
r
a
y
B
a
r
s
 
v
a
l
u
e
s
=
{
a
r
r
}
 
s
t
a
t
e
s
=
{
f
r
a
m
e
.
a
r
r
S
t
a
t
e
s
}
 
h
e
i
g
h
t
=
{
1
6
0
}
 
/
>


 
 
 
 
 
 
 
 
 
 
{
m
o
d
e
 
=
=
=
 
"
n
g
e
"
 
&
&
 
f
r
a
m
e
.
a
r
r
o
w
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
t
e
x
t
-
x
s
 
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
 
t
e
x
t
-
c
e
n
t
e
r
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
A
r
r
o
w
s
:
 
p
o
p
p
e
d
 
i
n
d
i
c
e
s
 
t
o
 
t
h
e
i
r
 
n
e
x
t
 
g
r
e
a
t
e
r
 
e
l
e
m
e
n
t
.


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
m
t
-
1
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
f
r
a
m
e
.
a
r
r
o
w
s
.
m
a
p
(
(
a
,
 
i
)
 
=
>
 
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
"
p
x
-
2
 
p
y
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
-
m
d
 
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
1
1
p
x
]
 
f
o
n
t
-
b
o
l
d
 
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
4
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
8
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
2
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
l
i
m
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
l
i
m
e
-
4
0
0
/
3
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
[
{
a
.
f
r
o
m
}
]
 
t
o
 
[
{
a
.
t
o
}
]
 
(
{
a
r
r
[
a
.
t
o
]
}
)


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
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


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
{
m
o
d
e
 
=
=
=
 
"
l
r
h
"
 
&
&
 
f
r
a
m
e
.
b
e
s
t
R
e
c
t
 
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
t
e
x
t
-
s
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
 
t
e
x
t
-
c
e
n
t
e
r
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
C
u
r
r
e
n
t
 
r
e
c
t
:
{
"
 
"
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
o
n
o
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
[
{
f
r
a
m
e
.
b
e
s
t
R
e
c
t
.
l
o
}
.
.
{
f
r
a
m
e
.
b
e
s
t
R
e
c
t
.
h
i
}
]
 
x
 
h
=
{
f
r
a
m
e
.
b
e
s
t
R
e
c
t
.
h
}
 
=
 
a
r
e
a
 
{
f
r
a
m
e
.
b
e
s
t
R
e
c
t
.
a
r
e
a
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
}


 
 
 
 
 
 
 
 
 
 
{
m
o
d
e
 
=
=
=
 
"
n
g
e
"
 
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
 
p
-
3
 
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
 
m
b
-
2
"
>
R
e
s
u
l
t
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
 
g
a
p
-
1
.
5
 
f
l
e
x
-
w
r
a
p
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
a
r
r
.
m
a
p
(
(
_
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
 
r
 
=
 
f
r
a
m
e
.
r
e
s
u
l
t
[
i
]
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
d
o
n
e
 
=
 
r
 
!
=
=
 
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
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
"
w
-
1
2
 
t
e
x
t
-
c
e
n
t
e
r
 
p
y
-
1
 
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
a
l
l
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
`
1
.
5
p
x
 
s
o
l
i
d
 
$
{
d
o
n
e
 
?
 
"
#
1
6
a
3
4
a
"
 
:
 
T
H
E
M
E
.
b
o
r
d
e
r
}
`
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
:
 
d
o
n
e
 
?
 
"
#
d
c
f
c
e
7
"
 
:
 
T
H
E
M
E
.
b
g
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
d
o
n
e
 
?
 
"
#
1
6
6
5
3
4
"
 
:
 
T
H
E
M
E
.
t
e
x
t
M
u
t
e
d
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
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
>
[
{
i
}
]
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
>
{
r
 
?
?
 
-
1
}
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
}


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
<
S
t
a
c
k
C
o
l
u
m
n
 
i
t
e
m
s
=
{
s
t
a
c
k
I
t
e
m
s
}
 
t
i
t
l
e
=
"
M
o
n
o
-
S
t
a
c
k
"
 
m
a
x
H
e
i
g
h
t
=
{
2
4
0
}
 
t
o
p
L
a
b
e
l
=
"
t
o
p
"
 
e
m
p
t
y
L
a
b
e
l
=
"
e
m
p
t
y
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
C
a
l
l
o
u
t
>
{
f
r
a
m
e
.
m
e
s
s
a
g
e
}
<
/
C
a
l
l
o
u
t
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




f
u
n
c
t
i
o
n
 
V
i
s
u
a
l
i
z
e
T
a
b
(
)
 
{


 
 
c
o
n
s
t
 
[
m
o
d
e
,
 
s
e
t
M
o
d
e
]
 
=
 
u
s
e
S
t
a
t
e
<
M
o
d
e
>
(
"
n
g
e
"
)
;


 
 
c
o
n
s
t
 
[
i
n
p
u
t
S
t
r
,
 
s
e
t
I
n
p
u
t
S
t
r
]
 
=
 
u
s
e
S
t
a
t
e
(
"
2
,
1
,
2
,
4
,
3
,
1
"
)
;


 
 
c
o
n
s
t
 
f
r
a
m
e
s
 
=
 
u
s
e
M
e
m
o
(
(
)
 
=
>
 
{


 
 
 
 
c
o
n
s
t
 
A
r
r
 
=
 
p
a
r
s
e
A
r
r
(
i
n
p
u
t
S
t
r
)
 
?
?
 
[
2
,
 
1
,
 
2
,
 
4
,
 
3
,
 
1
]
;


 
 
 
 
r
e
t
u
r
n
 
m
o
d
e
 
=
=
=
 
"
n
g
e
"
 
?
 
b
u
i
l
d
F
r
a
m
e
s
N
G
E
(
A
r
r
)
 
:
 
b
u
i
l
d
F
r
a
m
e
s
L
R
H
(
A
r
r
)
;


 
 
}
,
 
[
i
n
p
u
t
S
t
r
,
 
m
o
d
e
]
)
;


 
 
c
o
n
s
t
 
p
l
a
y
e
r
 
=
 
u
s
e
S
t
e
p
P
l
a
y
e
r
(
f
r
a
m
e
s
)
;


 
 
c
o
n
s
t
 
f
r
a
m
e
 
=
 
p
l
a
y
e
r
.
c
u
r
r
e
n
t
;


 
 
c
o
n
s
t
 
p
s
e
u
d
o
 
=
 
m
o
d
e
 
=
=
=
 
"
n
g
e
"
 
?
 
P
S
E
U
D
O
_
N
G
E
 
:
 
P
S
E
U
D
O
_
L
R
H
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
A
l
g
o
C
a
n
v
a
s


 
 
 
 
 
 
t
i
t
l
e
=
{
m
o
d
e
 
=
=
=
 
"
n
g
e
"
 
?
 
"
N
e
x
t
 
G
r
e
a
t
e
r
 
E
l
e
m
e
n
t
"
 
:
 
"
L
a
r
g
e
s
t
 
R
e
c
t
a
n
g
l
e
 
i
n
 
H
i
s
t
o
g
r
a
m
"
}


 
 
 
 
 
 
p
l
a
y
e
r
=
{
p
l
a
y
e
r
}


 
 
 
 
 
 
i
n
p
u
t
=
{


 
 
 
 
 
 
 
 
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
c
o
l
 
g
a
p
-
3
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
 
f
l
e
x
-
w
r
a
p
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
l
a
b
e
l
 
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
"
>
/
 
m
o
d
e
<
/
l
a
b
e
l
>


 
 
 
 
 
 
 
 
 
 
 
 
<
P
i
l
l
B
u
t
t
o
n
 
a
c
t
i
v
e
=
{
m
o
d
e
 
=
=
=
 
"
n
g
e
"
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
 
s
e
t
M
o
d
e
(
"
n
g
e
"
)
}
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
1
1
p
x
]
"
>
N
e
x
t
 
G
r
e
a
t
e
r
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
P
i
l
l
B
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
<
P
i
l
l
B
u
t
t
o
n
 
a
c
t
i
v
e
=
{
m
o
d
e
 
=
=
=
 
"
l
r
h
"
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
 
s
e
t
M
o
d
e
(
"
l
r
h
"
)
}
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
1
1
p
x
]
"
>
H
i
s
t
o
g
r
a
m
 
R
e
c
t
a
n
g
l
e
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
P
i
l
l
B
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


 
 
 
 
 
 
 
 
 
 
<
I
n
p
u
t
E
d
i
t
o
r


 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
=
"
A
r
r
a
y
 
(
u
p
 
t
o
 
1
2
 
v
a
l
u
e
s
)
"


 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
i
n
p
u
t
S
t
r
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
e
.
g
.
 
2
,
1
,
2
,
4
,
3
,
1
"


 
 
 
 
 
 
 
 
 
 
 
 
h
e
l
p
e
r
=
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
m
o
d
e
 
=
=
=
 
"
n
g
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
W
e
 
f
i
n
d
 
t
h
e
 
n
e
a
r
e
s
t
 
g
r
e
a
t
e
r
 
o
n
 
t
h
e
 
r
i
g
h
t
 
o
f
 
e
a
c
h
 
e
l
e
m
e
n
t
.
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
H
e
i
g
h
t
s
 
o
f
 
a
d
j
a
c
e
n
t
 
u
n
i
t
-
w
i
d
t
h
 
b
a
r
s
;
 
f
i
n
d
 
t
h
e
 
l
a
r
g
e
s
t
 
a
x
i
s
-
a
l
i
g
n
e
d
 
r
e
c
t
a
n
g
l
e
.
"


 
 
 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
 
 
 
 
p
r
e
s
e
t
s
=
{
[


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
C
l
a
s
s
i
c
"
,
 
v
a
l
u
e
:
 
"
2
,
1
,
2
,
4
,
3
,
1
"
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
I
n
c
r
e
a
s
i
n
g
"
,
 
v
a
l
u
e
:
 
"
1
,
2
,
3
,
4
,
5
"
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
D
e
c
r
e
a
s
i
n
g
"
,
 
v
a
l
u
e
:
 
"
5
,
4
,
3
,
2
,
1
"
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
H
i
s
t
o
g
r
a
m
"
,
 
v
a
l
u
e
:
 
"
2
,
1
,
5
,
6
,
2
,
3
"
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
F
l
a
t
"
,
 
v
a
l
u
e
:
 
"
3
,
3
,
3
,
3
"
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
]
}


 
 
 
 
 
 
 
 
 
 
 
 
o
n
A
p
p
l
y
=
{
(
v
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
s
e
A
r
r
(
v
)
)
 
s
e
t
I
n
p
u
t
S
t
r
(
v
)
;
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
o
n
R
a
n
d
o
m
=
{
(
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
n
 
=
 
5
 
+
 
M
a
t
h
.
f
l
o
o
r
(
M
a
t
h
.
r
a
n
d
o
m
(
)
 
*
 
5
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
a
r
r
:
 
n
u
m
b
e
r
[
]
 
=
 
[
]
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
r
 
(
l
e
t
 
i
 
=
 
0
;
 
i
 
<
 
n
;
 
i
+
+
)
 
a
r
r
.
p
u
s
h
(
1
 
+
 
M
a
t
h
.
f
l
o
o
r
(
M
a
t
h
.
r
a
n
d
o
m
(
)
 
*
 
6
)
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
I
n
p
u
t
S
t
r
(
a
r
r
.
j
o
i
n
(
"
,
"
)
)
;


 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
}


 
 
 
 
 
 
p
s
e
u
d
o
c
o
d
e
=
{
<
P
s
e
u
d
o
c
o
d
e
P
a
n
e
l
 
l
i
n
e
s
=
{
p
s
e
u
d
o
}
 
a
c
t
i
v
e
L
i
n
e
=
{
f
r
a
m
e
?
.
l
i
n
e
}
 
/
>
}


 
 
 
 
 
 
v
a
r
i
a
b
l
e
s
=
{
<
V
a
r
i
a
b
l
e
s
P
a
n
e
l
 
v
a
r
s
=
{
f
r
a
m
e
?
.
v
a
r
s
 
?
?
 
{
}
}
 
f
l
a
s
h
K
e
y
s
=
{
f
r
a
m
e
?
.
f
l
a
s
h
K
e
y
 
?
 
[
f
r
a
m
e
.
f
l
a
s
h
K
e
y
]
 
:
 
[
]
}
 
/
>
}


 
 
 
 
>


 
 
 
 
 
 
{
f
r
a
m
e
 
?
 
(


 
 
 
 
 
 
 
 
<
M
o
n
o
t
o
n
i
c
V
i
z
 
f
r
a
m
e
=
{
f
r
a
m
e
}
 
A
=
{
p
a
r
s
e
A
r
r
(
i
n
p
u
t
S
t
r
)
 
?
?
 
[
2
,
 
1
,
 
2
,
 
4
,
 
3
,
 
1
]
}
 
m
o
d
e
=
{
m
o
d
e
}
 
/
>


 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
<
C
a
l
l
o
u
t
>
P
r
e
s
s
 
p
l
a
y
 
t
o
 
s
t
e
p
 
t
h
r
o
u
g
h
 
t
h
e
 
a
l
g
o
r
i
t
h
m
.
<
/
C
a
l
l
o
u
t
>


 
 
 
 
 
 
)
}


 
 
 
 
<
/
A
l
g
o
C
a
n
v
a
s
>


 
 
)
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
L
e
a
r
n
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
L
e
a
r
n
T
a
b
(
)
 
{


 
 
c
o
n
s
t
 
s
e
c
t
i
o
n
s
 
=
 
[


 
 
 
 
{
 
t
i
t
l
e
:
 
"
W
h
a
t
 
i
s
 
a
 
m
o
n
o
t
o
n
i
c
 
s
t
a
c
k
?
"
,
 
b
o
d
y
:
 
"
A
 
s
t
a
c
k
 
i
n
 
w
h
i
c
h
 
e
v
e
r
y
 
e
l
e
m
e
n
t
 
i
s
 
e
i
t
h
e
r
 
s
t
r
i
c
t
l
y
 
>
=
 
(
d
e
c
r
e
a
s
i
n
g
)
 
o
r
 
<
=
 
(
i
n
c
r
e
a
s
i
n
g
)
 
i
t
s
 
p
r
e
d
e
c
e
s
s
o
r
.
 
T
o
 
k
e
e
p
 
t
h
e
 
o
r
d
e
r
 
w
e
 
p
o
p
 
o
f
f
e
n
d
e
r
s
 
b
e
f
o
r
e
 
p
u
s
h
i
n
g
.
 
T
h
e
 
p
o
p
 
e
v
e
n
t
 
c
a
r
r
i
e
s
 
m
e
a
n
i
n
g
:
 
t
h
e
 
p
o
p
p
e
d
 
e
l
e
m
e
n
t
 
m
e
t
 
i
t
s
 
m
a
t
c
h
.
"
 
}
,


 
 
 
 
{
 
t
i
t
l
e
:
 
"
N
e
x
t
-
g
r
e
a
t
e
r
 
p
a
t
t
e
r
n
"
,
 
b
o
d
y
:
 
"
S
c
a
n
 
l
e
f
t
 
t
o
 
r
i
g
h
t
.
 
W
h
i
l
e
 
t
h
e
 
t
o
p
 
o
f
 
t
h
e
 
s
t
a
c
k
 
i
s
 
s
m
a
l
l
e
r
 
t
h
a
n
 
t
h
e
 
c
u
r
r
e
n
t
 
v
a
l
u
e
,
 
p
o
p
 
i
t
,
 
t
h
e
 
c
u
r
r
e
n
t
 
v
a
l
u
e
 
i
s
 
i
t
s
 
n
e
x
t
 
g
r
e
a
t
e
r
.
 
P
u
s
h
 
t
h
e
 
c
u
r
r
e
n
t
 
i
n
d
e
x
.
 
E
a
c
h
 
i
n
d
e
x
 
i
s
 
p
u
s
h
e
d
 
a
n
d
 
p
o
p
p
e
d
 
a
t
 
m
o
s
t
 
o
n
c
e
,
 
g
i
v
i
n
g
 
O
(
n
)
.
"
 
}
,


 
 
 
 
{
 
t
i
t
l
e
:
 
"
L
a
r
g
e
s
t
 
r
e
c
t
a
n
g
l
e
 
i
n
 
h
i
s
t
o
g
r
a
m
"
,
 
b
o
d
y
:
 
"
U
s
e
 
a
 
m
o
n
o
t
o
n
i
c
-
i
n
c
r
e
a
s
i
n
g
 
s
t
a
c
k
 
o
f
 
i
n
d
i
c
e
s
.
 
W
h
e
n
 
a
 
s
h
o
r
t
e
r
 
b
a
r
 
a
r
r
i
v
e
s
,
 
t
a
l
l
e
r
 
b
a
r
s
 
o
n
 
t
h
e
 
s
t
a
c
k
 
a
r
e
 
t
r
a
p
p
e
d
,
 
w
e
 
c
a
n
 
n
o
w
 
c
o
m
p
u
t
e
 
t
h
e
i
r
 
w
i
d
t
h
 
(
c
u
r
r
e
n
t
 
i
n
d
e
x
 
m
i
n
u
s
 
s
t
a
c
k
.
t
o
p
 
m
i
n
u
s
 
1
)
 
a
n
d
 
a
r
e
a
.
"
 
}
,


 
 
 
 
{
 
t
i
t
l
e
:
 
"
M
o
n
o
t
o
n
i
c
 
d
e
q
u
e
"
,
 
b
o
d
y
:
 
"
A
 
d
o
u
b
l
e
-
e
n
d
e
d
 
v
a
r
i
a
n
t
 
u
s
e
d
 
f
o
r
 
s
l
i
d
i
n
g
-
w
i
n
d
o
w
 
m
a
x
i
m
u
m
.
 
P
o
p
 
f
r
o
m
 
t
h
e
 
b
a
c
k
 
w
h
i
l
e
 
m
a
i
n
t
a
i
n
i
n
g
 
o
r
d
e
r
,
 
p
o
p
 
f
r
o
m
 
t
h
e
 
f
r
o
n
t
 
w
h
e
n
 
t
h
e
 
i
n
d
e
x
 
f
a
l
l
s
 
o
u
t
 
o
f
 
t
h
e
 
w
i
n
d
o
w
.
 
O
(
n
)
 
f
o
r
 
m
a
x
 
o
v
e
r
 
e
v
e
r
y
 
w
i
n
d
o
w
 
o
f
 
s
i
z
e
 
k
.
"
 
}
,


 
 
]
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
f
l
e
x
 
f
l
e
x
-
c
o
l
 
g
a
p
-
5
"
>


 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
<
S
e
c
t
i
o
n
E
y
e
b
r
o
w
>
m
o
n
o
t
o
n
i
c
 
s
t
a
c
k
 
/
 
q
u
e
u
e
<
/
S
e
c
t
i
o
n
E
y
e
b
r
o
w
>


 
 
 
 
 
 
 
 
<
S
e
c
t
i
o
n
T
i
t
l
e
>
T
h
e
 
p
o
p
 
e
v
e
n
t
 
i
s
 
w
h
e
r
e
 
t
h
e
 
a
n
s
w
e
r
 
i
s
 
c
o
m
p
u
t
e
d
<
/
S
e
c
t
i
o
n
T
i
t
l
e
>


 
 
 
 
 
 
 
 
<
L
e
d
e
>


 
 
 
 
 
 
 
 
 
 
T
h
i
n
k
 
o
f
 
t
h
e
 
s
t
a
c
k
 
a
s
 
a
 
q
u
e
u
e
 
o
f
 
p
e
o
p
l
e
 
w
a
i
t
i
n
g
 
t
o
 
b
e
 
a
n
s
w
e
r
e
d
.
 
E
a
c
h
 
i
n
c
o
m
i
n
g
 
e
l
e
m
e
n
t
 
f
i
r
e
s
 
q
u
e
s
t
i
o
n
s
,
 
a
r
e
 
y
o
u
 
t
h
e
 
n
e
x
t
 
g
r
e
a
t
e
r
 
f
o
r
 
a
n
y
o
n
e
 
w
a
i
t
i
n
g
?
,
 
a
n
d
 
t
h
e
 
m
o
n
o
t
o
n
i
c
 
p
r
o
p
e
r
t
y
 
g
u
a
r
a
n
t
e
e
s
 
t
h
e
 
a
n
s
w
e
r
 
i
s
 
c
h
e
a
p
.


 
 
 
 
 
 
 
 
<
/
L
e
d
e
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
g
r
i
d
 
g
a
p
-
3
"
 
s
t
y
l
e
=
{
{
 
g
r
i
d
T
e
m
p
l
a
t
e
C
o
l
u
m
n
s
:
 
"
r
e
p
e
a
t
(
a
u
t
o
-
f
i
t
,
 
m
i
n
m
a
x
(
2
4
0
p
x
,
 
1
f
r
)
)
"
 
}
}
>


 
 
 
 
 
 
 
 
{
s
e
c
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
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
<
C
a
r
d
 
k
e
y
=
{
i
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
 
m
b
-
1
 
f
o
n
t
-
m
o
n
o
"
>
0
{
i
 
+
 
1
}
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
S
u
b
H
e
a
d
i
n
g
>
{
s
.
t
i
t
l
e
}
<
/
S
u
b
H
e
a
d
i
n
g
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
t
e
x
t
-
s
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
"
>
{
s
.
b
o
d
y
}
<
/
p
>


 
 
 
 
 
 
 
 
 
 
<
/
C
a
r
d
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


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
T
r
y
 
I
t
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
T
r
y
T
a
b
(
)
 
{


 
 
c
o
n
s
t
 
p
r
o
b
l
e
m
s
 
=
 
[


 
 
 
 
{
 
q
:
 
"
N
G
E
 
o
f
 
[
2
,
1
,
2
,
4
,
3
,
1
]
,
 
w
h
a
t
'
s
 
r
e
s
u
l
t
[
1
]
?
"
,
 
a
:
 
"
2
"
 
}
,


 
 
 
 
{
 
q
:
 
"
N
G
E
 
o
f
 
[
5
,
4
,
3
,
2
,
1
]
.
 
H
o
w
 
m
a
n
y
 
-
1
 
e
n
t
r
i
e
s
?
"
,
 
a
:
 
"
5
"
 
}
,


 
 
 
 
{
 
q
:
 
"
L
a
r
g
e
s
t
 
r
e
c
t
a
n
g
l
e
 
f
o
r
 
h
e
i
g
h
t
s
 
[
2
,
1
,
5
,
6
,
2
,
3
]
?
"
,
 
a
:
 
"
1
0
"
 
}
,


 
 
 
 
{
 
q
:
 
"
L
a
r
g
e
s
t
 
r
e
c
t
a
n
g
l
e
 
f
o
r
 
h
e
i
g
h
t
s
 
[
6
,
2
,
5
,
4
,
5
,
1
,
6
]
?
"
,
 
a
:
 
"
1
2
"
 
}
,


 
 
]
;


 
 
c
o
n
s
t
 
[
g
u
e
s
s
e
s
,
 
s
e
t
G
u
e
s
s
e
s
]
 
=
 
u
s
e
S
t
a
t
e
<
s
t
r
i
n
g
[
]
>
(
p
r
o
b
l
e
m
s
.
m
a
p
(
(
)
 
=
>
 
"
"
)
)
;


 
 
c
o
n
s
t
 
[
s
h
o
w
n
,
 
s
e
t
S
h
o
w
n
]
 
=
 
u
s
e
S
t
a
t
e
<
b
o
o
l
e
a
n
[
]
>
(
p
r
o
b
l
e
m
s
.
m
a
p
(
(
)
 
=
>
 
f
a
l
s
e
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
c
o
l
 
g
a
p
-
3
"
>


 
 
 
 
 
 
<
C
a
l
l
o
u
t
>


 
 
 
 
 
 
 
 
S
i
m
u
l
a
t
e
 
b
y
 
h
a
n
d
:
 
m
a
i
n
t
a
i
n
 
a
 
s
m
a
l
l
 
s
t
a
c
k
,
 
p
o
p
 
w
h
e
n
 
a
 
v
i
o
l
a
t
i
o
n
 
a
r
r
i
v
e
s
,
 
r
e
c
o
r
d
 
t
h
e
 
r
e
s
u
l
t
.


 
 
 
 
 
 
<
/
C
a
l
l
o
u
t
>


 
 
 
 
 
 
{
p
r
o
b
l
e
m
s
.
m
a
p
(
(
p
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
 
c
o
r
r
e
c
t
 
=
 
g
u
e
s
s
e
s
[
i
]
.
t
r
i
m
(
)
 
=
=
=
 
p
.
a
;


 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
<
C
a
r
d
 
k
e
y
=
{
i
}
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
t
e
x
t
-
s
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
8
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
2
0
0
 
m
b
-
3
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
4
0
0
 
m
r
-
1
"
>
#
{
i
 
+
 
1
}
.
<
/
s
p
a
n
>
 
{
p
.
q
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
f
l
e
x
 
g
a
p
-
2
 
f
l
e
x
-
w
r
a
p
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
g
u
e
s
s
e
s
[
i
]
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
 
{
 
c
o
n
s
t
 
v
 
=
 
[
.
.
.
g
u
e
s
s
e
s
]
;
 
v
[
i
]
 
=
 
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
;
 
s
e
t
G
u
e
s
s
e
s
(
v
)
;
 
}
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
y
o
u
r
 
a
n
s
w
e
r
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
w
-
2
8
 
p
x
-
3
 
p
y
-
1
.
5
 
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
s
m
 
f
o
c
u
s
:
o
u
t
l
i
n
e
-
n
o
n
e
 
f
o
c
u
s
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
4
0
0
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
 
{
 
c
o
n
s
t
 
v
 
=
 
[
.
.
.
s
h
o
w
n
]
;
 
v
[
i
]
 
=
 
t
r
u
e
;
 
s
e
t
S
h
o
w
n
(
v
)
;
 
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
p
x
-
3
 
p
y
-
1
.
5
 
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
e
d
i
u
m
 
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
4
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
R
e
v
e
a
l


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
h
o
w
n
[
i
]
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
p
x
-
3
 
p
y
-
1
 
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
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
r
r
e
c
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
4
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
8
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
2
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
l
i
m
e
-
4
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
b
g
-
r
o
s
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
r
o
s
e
-
4
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
r
o
s
e
-
8
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
r
o
s
e
-
2
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
r
o
s
e
-
4
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
o
r
r
e
c
t
 
?
 
`
C
o
r
r
e
c
t
 
-
 
$
{
p
.
a
}
`
 
:
 
`
A
n
s
w
e
r
:
 
$
{
p
.
a
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
/
C
a
r
d
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
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
I
n
s
i
g
h
t
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




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
s
i
g
h
t
T
a
b
(
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
f
l
e
x
 
f
l
e
x
-
c
o
l
 
g
a
p
-
4
"
>


 
 
 
 
 
 
<
C
a
r
d
>


 
 
 
 
 
 
 
 
<
S
u
b
H
e
a
d
i
n
g
>
P
a
t
t
e
r
n
 
s
i
g
n
a
t
u
r
e
<
/
S
u
b
H
e
a
d
i
n
g
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
t
e
x
t
-
s
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
"
>


 
 
 
 
 
 
 
 
 
 
I
f
 
a
 
p
r
o
b
l
e
m
 
a
s
k
s
 
f
o
r
 
t
h
e
 
n
e
a
r
e
s
t
 
l
a
r
g
e
r
 
o
r
 
s
m
a
l
l
e
r
 
e
l
e
m
e
n
t
,
 
t
h
e
 
s
p
a
n
,
 
o
r
 
t
h
e
 
r
e
c
t
a
n
g
l
e
 
b
o
u
n
d
e
d
 
b
y
 
s
o
m
e
t
h
i
n
g
 
s
h
o
r
t
e
r
 
o
r
 
t
a
l
l
e
r
,
 
r
e
a
c
h
 
f
o
r
 
a
 
m
o
n
o
t
o
n
i
c
 
s
t
a
c
k
.
 
T
h
e
 
p
o
p
 
e
v
e
n
t
 
i
s
 
w
h
e
r
e
 
t
h
e
 
a
n
s
w
e
r
 
i
s
 
c
o
m
p
u
t
e
d
.


 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
<
/
C
a
r
d
>


 
 
 
 
 
 
<
C
a
r
d
>


 
 
 
 
 
 
 
 
<
S
u
b
H
e
a
d
i
n
g
>
C
o
m
p
l
e
x
i
t
y
 
a
r
g
u
m
e
n
t
<
/
S
u
b
H
e
a
d
i
n
g
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
t
e
x
t
-
s
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
"
>


 
 
 
 
 
 
 
 
 
 
E
v
e
r
y
 
i
n
d
e
x
 
i
s
 
p
u
s
h
e
d
 
e
x
a
c
t
l
y
 
o
n
c
e
.
 
E
a
c
h
 
i
n
d
e
x
 
i
s
 
p
o
p
p
e
d
 
a
t
 
m
o
s
t
 
o
n
c
e
.
 
S
o
 
t
h
e
 
i
n
n
e
r
 
l
o
o
p
'
s
 
t
o
t
a
l
 
w
o
r
k
 
a
c
r
o
s
s
 
t
h
e
 
w
h
o
l
e
 
o
u
t
e
r
 
l
o
o
p
 
i
s
 
a
t
 
m
o
s
t
 
n
.
 
O
u
t
e
r
 
+
 
i
n
n
e
r
 
=
 
O
(
n
 
+
 
n
)
 
=
 
O
(
n
)
.
 
A
m
o
r
t
i
z
e
d
 
a
n
a
l
y
s
i
s
,
 
t
h
e
 
s
a
m
e
 
t
r
i
c
k
 
a
s
 
s
l
i
d
i
n
g
 
w
i
n
d
o
w
.


 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
<
/
C
a
r
d
>


 
 
 
 
 
 
<
C
a
r
d
>


 
 
 
 
 
 
 
 
<
S
u
b
H
e
a
d
i
n
g
>
C
o
u
s
i
n
s
 
w
o
r
t
h
 
k
n
o
w
i
n
g
<
/
S
u
b
H
e
a
d
i
n
g
>


 
 
 
 
 
 
 
 
<
u
l
 
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
s
t
-
d
i
s
c
 
p
l
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
1
 
t
e
x
t
-
s
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
"
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
D
a
i
l
y
 
t
e
m
p
e
r
a
t
u
r
e
s
:
 
n
e
x
t
-
g
r
e
a
t
e
r
 
r
e
p
h
r
a
s
e
d
.
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
T
r
a
p
p
i
n
g
 
r
a
i
n
 
w
a
t
e
r
:
 
t
w
o
-
p
o
i
n
t
e
r
 
o
r
 
m
o
n
o
t
o
n
i
c
 
s
t
a
c
k
.
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
S
t
o
c
k
 
s
p
a
n
:
 
n
e
x
t
-
g
r
e
a
t
e
r
 
o
n
 
t
h
e
 
r
e
v
e
r
s
e
d
 
a
r
r
a
y
.
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
S
l
i
d
i
n
g
 
w
i
n
d
o
w
 
m
a
x
:
 
m
o
n
o
t
o
n
i
c
 
d
e
q
u
e
.
<
/
l
i
>


 
 
 
 
 
 
 
 
<
/
u
l
>


 
 
 
 
 
 
<
/
C
a
r
d
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




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
R
o
o
t
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




i
n
t
e
r
f
a
c
e
 
P
r
o
p
s
 
{


 
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
?
:
 
(
s
c
o
r
e
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
 
d
e
f
a
u
l
t
 
f
u
n
c
t
i
o
n
 
L
8
_
M
o
n
o
t
o
n
i
c
S
t
a
c
k
(
{
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
 
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
 
t
a
b
s
:
 
L
e
s
s
o
n
T
a
b
D
e
f
[
]
 
=
 
[


 
 
 
 
{
 
i
d
:
 
"
l
e
a
r
n
"
,
 
l
a
b
e
l
:
 
"
L
e
a
r
n
"
,
 
i
c
o
n
:
 
<
B
o
o
k
O
p
e
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
"
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
L
e
a
r
n
T
a
b
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
v
i
s
u
a
l
i
z
e
"
,
 
l
a
b
e
l
:
 
"
V
i
s
u
a
l
i
z
e
"
,
 
i
c
o
n
:
 
<
P
l
a
y
 
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
"
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
V
i
s
u
a
l
i
z
e
T
a
b
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
t
r
y
"
,
 
l
a
b
e
l
:
 
"
T
r
y
 
I
t
"
,
 
i
c
o
n
:
 
<
T
a
r
g
e
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
w
-
4
 
h
-
4
"
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
T
r
y
T
a
b
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
i
n
s
i
g
h
t
"
,
 
l
a
b
e
l
:
 
"
I
n
s
i
g
h
t
"
,
 
i
c
o
n
:
 
<
L
i
g
h
t
b
u
l
b
 
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
"
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
I
n
s
i
g
h
t
T
a
b
 
/
>
 
}
,


 
 
 
 
.
.
.
(
P
R
A
C
T
I
C
E
_
T
O
P
I
C
_
S
L
U
G


 
 
 
 
 
 
?
 
[


 
 
 
 
 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
 
 
 
 
i
d
:
 
"
p
r
a
c
t
i
c
e
"
,


 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
:
 
"
P
r
a
c
t
i
c
e
"
,


 
 
 
 
 
 
 
 
 
 
 
 
i
c
o
n
:
 
<
C
o
d
e
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
w
-
4
 
h
-
4
"
 
/
>
,


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
t
e
n
t
:
 
<
P
r
a
c
t
i
c
e
T
a
b
 
t
o
p
i
c
S
l
u
g
=
{
P
R
A
C
T
I
C
E
_
T
O
P
I
C
_
S
L
U
G
}
 
/
>
,


 
 
 
 
 
 
 
 
 
 
}
,


 
 
 
 
 
 
 
 
]


 
 
 
 
 
 
:
 
[
]
)
,


 
 
]
;




 
 
c
o
n
s
t
 
q
u
i
z
:
 
L
e
s
s
o
n
Q
u
i
z
Q
u
e
s
t
i
o
n
[
]
 
=
 
[


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
W
h
y
 
i
s
 
a
 
m
o
n
o
t
o
n
i
c
-
s
t
a
c
k
 
s
o
l
u
t
i
o
n
 
f
o
r
 
'
n
e
x
t
 
g
r
e
a
t
e
r
 
e
l
e
m
e
n
t
'
 
O
(
n
)
 
a
n
d
 
n
o
t
 
O
(
n
²
)
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[


 
 
 
 
 
 
 
 
"
B
e
c
a
u
s
e
 
t
h
e
 
i
n
p
u
t
 
i
s
 
s
o
r
t
e
d
"
,


 
 
 
 
 
 
 
 
"
B
e
c
a
u
s
e
 
e
a
c
h
 
i
n
d
e
x
 
i
s
 
p
u
s
h
e
d
 
a
n
d
 
p
o
p
p
e
d
 
a
t
 
m
o
s
t
 
o
n
c
e
 
-
 
t
o
t
a
l
 
w
o
r
k
 
i
s
 
2
n
"
,


 
 
 
 
 
 
 
 
"
B
e
c
a
u
s
e
 
t
h
e
 
s
t
a
c
k
 
h
a
s
 
s
i
z
e
 
a
t
 
m
o
s
t
 
s
q
r
t
(
n
)
"
,


 
 
 
 
 
 
 
 
"
I
t
 
i
s
 
n
o
t
 
-
 
i
t
 
i
s
 
O
(
n
²
)
"
,


 
 
 
 
 
 
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
T
h
e
 
a
m
o
r
t
i
z
e
d
 
a
r
g
u
m
e
n
t
:
 
e
a
c
h
 
e
l
e
m
e
n
t
 
e
n
t
e
r
s
 
t
h
e
 
s
t
a
c
k
 
o
n
c
e
 
a
n
d
 
l
e
a
v
e
s
 
o
n
c
e
.
 
T
h
e
 
i
n
n
e
r
 
w
h
i
l
e
 
a
c
r
o
s
s
 
t
h
e
 
e
n
t
i
r
e
 
r
u
n
 
p
e
r
f
o
r
m
s
 
a
t
 
m
o
s
t
 
n
 
p
o
p
s
 
t
o
t
a
l
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
I
n
 
t
h
e
 
l
a
r
g
e
s
t
-
r
e
c
t
a
n
g
l
e
-
i
n
-
h
i
s
t
o
g
r
a
m
 
p
r
o
b
l
e
m
,
 
w
h
a
t
 
i
n
f
o
r
m
a
t
i
o
n
 
i
s
 
c
a
r
r
i
e
d
 
b
y
 
t
h
e
 
s
t
a
c
k
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[


 
 
 
 
 
 
 
 
"
T
h
e
 
r
u
n
n
i
n
g
 
s
u
m
 
o
f
 
h
e
i
g
h
t
s
"
,


 
 
 
 
 
 
 
 
"
I
n
d
i
c
e
s
 
o
f
 
b
a
r
s
 
i
n
 
s
t
r
i
c
t
l
y
 
i
n
c
r
e
a
s
i
n
g
 
h
e
i
g
h
t
 
o
r
d
e
r
 
-
 
c
a
n
d
i
d
a
t
e
s
 
w
h
o
s
e
 
r
e
c
t
a
n
g
l
e
 
e
x
t
e
n
d
s
 
t
o
 
t
h
e
 
r
i
g
h
t
"
,


 
 
 
 
 
 
 
 
"
O
n
l
y
 
t
h
e
 
m
a
x
i
m
u
m
 
h
e
i
g
h
t
 
s
e
e
n
 
s
o
 
f
a
r
"
,


 
 
 
 
 
 
 
 
"
A
 
s
o
r
t
e
d
 
l
i
s
t
 
o
f
 
a
l
l
 
h
e
i
g
h
t
s
"
,


 
 
 
 
 
 
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
B
a
r
s
 
o
n
 
t
h
e
 
s
t
a
c
k
 
h
a
v
e
n
'
t
 
y
e
t
 
h
i
t
 
a
 
s
h
o
r
t
e
r
 
n
e
i
g
h
b
o
r
 
t
o
 
t
h
e
i
r
 
r
i
g
h
t
,
 
s
o
 
t
h
e
i
r
 
r
i
g
h
t
 
b
o
u
n
d
a
r
y
 
i
s
 
s
t
i
l
l
 
o
p
e
n
.
 
W
h
e
n
 
a
 
s
h
o
r
t
e
r
 
b
a
r
 
a
r
r
i
v
e
s
,
 
e
a
c
h
 
t
r
a
p
p
e
d
 
b
a
r
'
s
 
r
e
c
t
a
n
g
l
e
 
i
s
 
f
i
n
a
l
i
z
e
d
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
I
n
 
t
h
e
 
n
e
x
t
-
g
r
e
a
t
e
r
 
a
l
g
o
r
i
t
h
m
,
 
a
f
t
e
r
 
p
r
o
c
e
s
s
i
n
g
 
[
4
,
 
3
,
 
2
,
 
1
]
,
 
w
h
a
t
 
d
o
e
s
 
t
h
e
 
s
t
a
c
k
 
c
o
n
t
a
i
n
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
[
]
"
,
 
"
[
4
]
"
,
 
"
[
4
,
 
3
,
 
2
,
 
1
]
"
,
 
"
[
1
]
"
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
2
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
T
h
e
 
a
r
r
a
y
 
i
s
 
s
t
r
i
c
t
l
y
 
d
e
c
r
e
a
s
i
n
g
.
 
N
o
t
h
i
n
g
 
e
v
e
r
 
p
o
p
s
.
 
A
l
l
 
f
o
u
r
 
i
n
d
i
c
e
s
 
r
e
m
a
i
n
 
o
n
 
t
h
e
 
s
t
a
c
k
;
 
t
h
e
i
r
 
r
e
s
u
l
t
 
e
n
t
r
i
e
s
 
s
t
a
y
 
-
1
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
W
h
i
c
h
 
s
t
r
u
c
t
u
r
e
 
i
s
 
b
e
s
t
 
f
o
r
 
'
s
l
i
d
i
n
g
 
w
i
n
d
o
w
 
m
a
x
i
m
u
m
'
 
o
v
e
r
 
e
v
e
r
y
 
w
i
n
d
o
w
 
o
f
 
s
i
z
e
 
k
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[


 
 
 
 
 
 
 
 
"
B
a
l
a
n
c
e
d
 
B
S
T
 
i
n
 
e
a
c
h
 
w
i
n
d
o
w
"
,


 
 
 
 
 
 
 
 
"
M
i
n
-
h
e
a
p
"
,


 
 
 
 
 
 
 
 
"
M
o
n
o
t
o
n
i
c
 
d
e
q
u
e
 
-
 
p
o
p
 
f
r
o
m
 
b
a
c
k
 
t
o
 
m
a
i
n
t
a
i
n
 
o
r
d
e
r
,
 
p
o
p
 
f
r
o
m
 
f
r
o
n
t
 
w
h
e
n
 
i
n
d
e
x
 
i
s
 
s
t
a
l
e
"
,


 
 
 
 
 
 
 
 
"
H
a
s
h
 
m
a
p
"
,


 
 
 
 
 
 
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
2
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
D
e
q
u
e
 
f
r
o
n
t
 
a
l
w
a
y
s
 
h
o
l
d
s
 
t
h
e
 
i
n
d
e
x
 
o
f
 
t
h
e
 
w
i
n
d
o
w
'
s
 
m
a
x
i
m
u
m
.
 
B
a
c
k
 
p
o
p
s
 
d
i
s
c
a
r
d
 
d
o
m
i
n
a
t
e
d
 
v
a
l
u
e
s
;
 
f
r
o
n
t
 
p
o
p
s
 
d
r
o
p
 
o
u
t
-
o
f
-
w
i
n
d
o
w
 
i
n
d
i
c
e
s
.
 
O
(
n
)
 
t
o
t
a
l
.
"
,


 
 
 
 
}
,


 
 
]
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
L
e
s
s
o
n
S
h
e
l
l


 
 
 
 
 
 
t
i
t
l
e
=
"
M
o
n
o
t
o
n
i
c
 
S
t
a
c
k
"


 
 
 
 
 
 
l
e
v
e
l
=
{
8
}


 
 
 
 
 
 
l
e
s
s
o
n
N
u
m
b
e
r
=
{
1
}


 
 
 
 
 
 
t
a
b
s
=
{
t
a
b
s
}


 
 
 
 
 
 
q
u
i
z
=
{
q
u
i
z
}


 
 
 
 
 
 
p
l
a
c
e
m
e
n
t
R
e
l
e
v
a
n
c
e
=
"
H
i
g
h
 
-
 
s
t
o
c
k
 
s
p
a
n
,
 
h
i
s
t
o
g
r
a
m
,
 
t
e
m
p
e
r
a
t
u
r
e
s
,
 
s
l
i
d
i
n
g
-
w
i
n
d
o
w
 
m
a
x
"


 
 
 
 
 
 
n
e
x
t
L
e
s
s
o
n
H
i
n
t
=
"
B
i
n
a
r
y
 
S
e
a
r
c
h
 
o
n
 
A
n
s
w
e
r
"


 
 
 
 
 
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
=
{
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
}


 
 
 
 
/
>


 
 
)
;


}


