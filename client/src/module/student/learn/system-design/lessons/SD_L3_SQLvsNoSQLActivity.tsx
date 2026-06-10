
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
S
t
a
t
e
,
 
t
y
p
e
 
C
S
S
P
r
o
p
e
r
t
i
e
s
 
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
 
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
,
 
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


 
 
D
a
t
a
b
a
s
e
,


 
 
F
i
l
e
J
s
o
n
,


 
 
L
a
y
e
r
s
,


 
 
W
o
r
k
f
l
o
w
,


 
 
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
 
E
n
g
i
n
e
e
r
i
n
g
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
 
f
r
o
m
 
"
@
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
e
n
g
i
n
e
e
r
i
n
g
/
E
n
g
i
n
e
e
r
i
n
g
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
 
t
y
p
e
 
{
 
E
n
g
T
a
b
D
e
f
,
 
E
n
g
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
 
}
 
f
r
o
m
 
"
@
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
e
n
g
i
n
e
e
r
i
n
g
/
E
n
g
i
n
e
e
r
i
n
g
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




c
o
n
s
t
 
S
D
 
=
 
"
#
8
4
c
c
1
6
"
;


c
o
n
s
t
 
N
E
U
T
R
A
L
 
=
 
"
#
6
4
7
4
8
b
"
;


c
o
n
s
t
 
M
O
N
O
 
=
 
'
"
J
e
t
B
r
a
i
n
s
 
M
o
n
o
"
,
 
M
e
n
l
o
,
 
C
o
n
s
o
l
a
s
,
 
m
o
n
o
s
p
a
c
e
'
;




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
T
i
t
l
e
:
 
C
S
S
P
r
o
p
e
r
t
i
e
s
 
=
 
{


 
 
f
o
n
t
F
a
m
i
l
y
:
 
"
v
a
r
(
-
-
e
n
g
-
f
o
n
t
)
"
,


 
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
,


 
 
f
o
n
t
S
i
z
e
:
 
"
1
.
1
5
r
e
m
"
,


 
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
,


 
 
m
a
r
g
i
n
:
 
"
0
 
0
 
1
2
p
x
"
,


}
;


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
D
e
s
c
:
 
C
S
S
P
r
o
p
e
r
t
i
e
s
 
=
 
{


 
 
f
o
n
t
F
a
m
i
l
y
:
 
"
v
a
r
(
-
-
e
n
g
-
f
o
n
t
)
"
,


 
 
f
o
n
t
S
i
z
e
:
 
"
0
.
9
2
r
e
m
"
,


 
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
,


 
 
m
a
r
g
i
n
:
 
"
0
 
0
 
2
0
p
x
"
,


 
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
6
5
,


}
;




/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
T
A
B
 
1
 
-
 
S
h
a
p
e
 
o
f
 
t
h
e
 
d
a
t
a
 
(
t
h
e
 
k
i
l
l
e
r
 
a
n
i
m
a
t
i
o
n
)
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/




t
y
p
e
 
S
h
a
p
e
 
=
 
"
s
q
l
"
 
|
 
"
n
o
s
q
l
"
;




c
o
n
s
t
 
U
S
E
R
 
=
 
{


 
 
i
d
:
 
4
2
,


 
 
n
a
m
e
:
 
"
A
s
h
a
 
R
a
o
"
,


 
 
e
m
a
i
l
:
 
"
a
s
h
a
@
e
x
a
m
p
l
e
.
c
o
m
"
,


 
 
c
i
t
y
:
 
"
P
u
n
e
"
,


}
;


c
o
n
s
t
 
O
R
D
E
R
S
 
=
 
[


 
 
{
 
i
d
:
 
9
0
1
,
 
i
t
e
m
:
 
"
O
n
e
P
l
u
s
 
B
u
d
s
 
3
"
,
 
t
o
t
a
l
:
 
5
4
9
9
 
}
,


 
 
{
 
i
d
:
 
9
0
2
,
 
i
t
e
m
:
 
"
L
o
g
i
t
e
c
h
 
M
X
 
M
a
s
t
e
r
"
,
 
t
o
t
a
l
:
 
8
9
9
9
 
}
,


]
;




f
u
n
c
t
i
o
n
 
S
h
a
p
e
M
o
r
p
h
(
)
 
{


 
 
c
o
n
s
t
 
[
s
h
a
p
e
,
 
s
e
t
S
h
a
p
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
S
h
a
p
e
>
(
"
s
q
l
"
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
>


 
 
 
 
 
 
<
h
3
 
s
t
y
l
e
=
{
s
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
}
>
S
a
m
e
 
d
a
t
a
.
 
T
w
o
 
s
h
a
p
e
s
.
<
/
h
3
>


 
 
 
 
 
 
<
p
 
s
t
y
l
e
=
{
s
e
c
t
i
o
n
D
e
s
c
}
>


 
 
 
 
 
 
 
 
A
 
u
s
e
r
 
w
i
t
h
 
t
w
o
 
o
r
d
e
r
s
,
 
e
x
p
r
e
s
s
e
d
 
a
s
 
<
b
>
r
e
l
a
t
i
o
n
a
l
 
r
o
w
s
<
/
b
>
 
o
n
 
t
h
e
 
l
e
f
t
,
 
a
n
d
 
a
s
 
a
 
<
b
>
s
i
n
g
l
e


 
 
 
 
 
 
 
 
d
o
c
u
m
e
n
t
<
/
b
>
 
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
.
 
T
o
g
g
l
e
 
b
e
t
w
e
e
n
 
t
h
e
m
 
a
n
d
 
w
a
t
c
h
 
t
h
e
 
d
a
t
a
 
m
o
r
p
h
.
 
B
o
t
h
 
s
t
o
r
e
 
t
h
e


 
 
 
 
 
 
 
 
s
a
m
e
 
f
a
c
t
s
,
 
j
u
s
t
 
s
t
i
t
c
h
e
d
 
d
i
f
f
e
r
e
n
t
l
y
.


 
 
 
 
 
 
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
 
m
b
-
5
"
>


 
 
 
 
 
 
 
 
{
(
[
"
s
q
l
"
,
 
"
n
o
s
q
l
"
]
 
a
s
 
S
h
a
p
e
[
]
)
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
 
{


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
a
c
t
i
v
e
 
=
 
s
h
a
p
e
 
=
=
=
 
s
;


 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
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
 
s
e
t
S
h
a
p
e
(
s
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
r
e
m
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
1
e
m
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
e
x
t
T
r
a
n
s
f
o
r
m
:
 
"
u
p
p
e
r
c
a
s
e
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
8
p
x
 
1
4
p
x
"
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
 
6
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
u
r
s
o
r
:
 
"
p
o
i
n
t
e
r
"
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
a
c
t
i
v
e
 
?
 
S
D
 
:
 
"
v
a
r
(
-
-
e
n
g
-
b
o
r
d
e
r
)
"
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
 
a
c
t
i
v
e
 
?
 
`
$
{
S
D
}
1
8
`
 
:
 
"
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
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
a
c
t
i
v
e
 
?
 
S
D
 
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
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
1
8
s
 
e
a
s
e
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
 
=
=
=
 
"
s
q
l
"
 
?
 
"
R
e
l
a
t
i
o
n
a
l
 
(
S
Q
L
)
"
 
:
 
"
D
o
c
u
m
e
n
t
 
(
N
o
S
Q
L
)
"
}


 
 
 
 
 
 
 
 
 
 
 
 
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
;


 
 
 
 
 
 
 
 
}
)
}


 
 
 
 
 
 
 
 
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
 
f
l
e
x
:
 
1
 
}
}
 
/
>


 
 
 
 
 
 
 
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
1
 
u
s
e
r
 
·
 
2
 
o
r
d
e
r
s


 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
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
 
"
#
0
b
1
2
2
0
"
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
 
1
2
,


 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
"
1
p
x
 
s
o
l
i
d
 
r
g
b
a
(
1
4
8
,
1
6
3
,
1
8
4
,
0
.
1
5
)
"
,


 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
2
2
p
x
 
2
2
p
x
 
1
8
p
x
"
,


 
 
 
 
 
 
 
 
 
 
m
i
n
H
e
i
g
h
t
:
 
3
6
0
,


 
 
 
 
 
 
 
 
 
 
o
v
e
r
f
l
o
w
:
 
"
h
i
d
d
e
n
"
,


 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
<
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
 
m
o
d
e
=
"
w
a
i
t
"
>


 
 
 
 
 
 
 
 
 
 
{
s
h
a
p
e
 
=
=
=
 
"
s
q
l
"
 
?
 
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
s
q
l
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
 
y
:
 
1
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
 
y
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
 
y
:
 
-
1
0
 
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
4
,
 
e
a
s
e
:
 
[
0
.
1
6
,
 
1
,
 
0
.
3
,
 
1
]
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
S
q
l
V
i
e
w
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
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
 
:
 
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
n
o
s
q
l
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
 
y
:
 
1
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
 
y
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
 
y
:
 
-
1
0
 
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
4
,
 
e
a
s
e
:
 
[
0
.
1
6
,
 
1
,
 
0
.
3
,
 
1
]
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
N
o
S
q
l
V
i
e
w
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
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
}


 
 
 
 
 
 
 
 
<
/
A
n
i
m
a
t
e
P
r
e
s
e
n
c
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
r
i
d
-
c
o
l
s
-
1
 
s
m
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
2
 
g
a
p
-
3
 
m
t
-
5
"
>


 
 
 
 
 
 
 
 
{
[


 
 
 
 
 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
 
 
 
 
h
e
a
d
i
n
g
:
 
"
R
e
a
d
i
n
g
 
t
h
e
 
u
s
e
r
"
,


 
 
 
 
 
 
 
 
 
 
 
 
s
q
l
:
 
"
J
O
I
N
 
u
s
e
r
s
 
+
 
o
r
d
e
r
s
,
 
m
a
y
 
h
i
t
 
2
 
i
n
d
e
x
e
s
.
"
,


 
 
 
 
 
 
 
 
 
 
 
 
n
o
s
q
l
:
 
"
S
i
n
g
l
e
 
f
e
t
c
h
 
b
y
 
u
s
e
r
 
i
d
.
 
O
n
e
 
r
o
u
n
d
 
t
r
i
p
.
"
,


 
 
 
 
 
 
 
 
 
 
}
,


 
 
 
 
 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
 
 
 
 
h
e
a
d
i
n
g
:
 
"
A
d
d
i
n
g
 
a
 
n
e
w
 
f
i
e
l
d
"
,


 
 
 
 
 
 
 
 
 
 
 
 
s
q
l
:
 
"
A
L
T
E
R
 
T
A
B
L
E
;
 
s
o
m
e
t
i
m
e
s
 
b
l
o
c
k
i
n
g
 
o
n
 
l
a
r
g
e
 
t
a
b
l
e
s
.
"
,


 
 
 
 
 
 
 
 
 
 
 
 
n
o
s
q
l
:
 
"
J
u
s
t
 
w
r
i
t
e
 
i
t
.
 
S
c
h
e
m
a
 
l
i
v
e
s
 
i
n
 
a
p
p
 
c
o
d
e
.
"
,


 
 
 
 
 
 
 
 
 
 
}
,


 
 
 
 
 
 
 
 
]
.
m
a
p
(
(
r
o
w
)
 
=
>
 
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
{
r
o
w
.
h
e
a
d
i
n
g
}


 
 
 
 
 
 
 
 
 
 
 
 
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
 
y
:
 
6
 
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
 
y
:
 
0
 
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
3
5
,
 
e
a
s
e
:
 
[
0
.
1
6
,
 
1
,
 
0
.
3
,
 
1
]
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
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
 
"
1
p
x
 
s
o
l
i
d
 
v
a
r
(
-
-
e
n
g
-
b
o
r
d
e
r
)
"
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
 
1
0
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
1
2
p
x
 
1
4
p
x
"
,


 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
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
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
6
5
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
8
0
0
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
1
e
m
"
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
8
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
o
w
.
h
e
a
d
i
n
g
.
t
o
U
p
p
e
r
C
a
s
e
(
)
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
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
4
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
6
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
6
6
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
8
0
0
,
 
c
o
l
o
r
:
 
S
D
,
 
m
a
r
g
i
n
R
i
g
h
t
:
 
6
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
S
Q
L


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
o
w
.
s
q
l
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
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
4
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
6
6
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
8
0
0
,
 
c
o
l
o
r
:
 
N
E
U
T
R
A
L
,
 
m
a
r
g
i
n
R
i
g
h
t
:
 
6
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
N
o
S
Q
L


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
o
w
.
n
o
s
q
l
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
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




f
u
n
c
t
i
o
n
 
S
q
l
V
i
e
w
(
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
l
e
H
e
a
d
e
r
 
=
 
(
c
o
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
)
 
=
>
 
(


 
 
 
 
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


 
 
 
 
 
 
 
 
d
i
s
p
l
a
y
:
 
"
g
r
i
d
"
,


 
 
 
 
 
 
 
 
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
 
`
r
e
p
e
a
t
(
$
{
c
o
l
s
.
l
e
n
g
t
h
}
,
 
1
f
r
)
`
,


 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
8
p
x
 
1
2
p
x
"
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
 
"
r
g
b
a
(
1
3
2
,
2
0
4
,
2
2
,
0
.
0
8
)
"
,


 
 
 
 
 
 
 
 
b
o
r
d
e
r
B
o
t
t
o
m
:
 
`
1
p
x
 
s
o
l
i
d
 
$
{
S
D
}
3
3
`
,


 
 
 
 
 
 
 
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,


 
 
 
 
 
 
 
 
f
o
n
t
S
i
z
e
:
 
"
0
.
6
6
r
e
m
"
,


 
 
 
 
 
 
 
 
f
o
n
t
W
e
i
g
h
t
:
 
8
0
0
,


 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
S
D
,


 
 
 
 
 
 
 
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
1
e
m
"
,


 
 
 
 
 
 
 
 
t
e
x
t
T
r
a
n
s
f
o
r
m
:
 
"
u
p
p
e
r
c
a
s
e
"
,


 
 
 
 
 
 
}
}


 
 
 
 
>


 
 
 
 
 
 
{
c
o
l
s
.
m
a
p
(
(
c
)
 
=
>
 
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
c
}
>
{
c
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
;




 
 
c
o
n
s
t
 
c
e
l
l
:
 
C
S
S
P
r
o
p
e
r
t
i
e
s
 
=
 
{


 
 
 
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,


 
 
 
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
8
r
e
m
"
,


 
 
 
 
c
o
l
o
r
:
 
"
#
e
5
e
7
e
b
"
,


 
 
 
 
p
a
d
d
i
n
g
:
 
"
8
p
x
 
1
2
p
x
"
,


 
 
}
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
g
r
i
d
 
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
1
 
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
2
 
g
a
p
-
4
"
>


 
 
 
 
 
 
{
/
*
 
u
s
e
r
s
 
t
a
b
l
e
 
*
/
}


 
 
 
 
 
 
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
1
2
 
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
4
,
 
d
e
l
a
y
:
 
0
.
0
5
,
 
e
a
s
e
:
 
[
0
.
1
6
,
 
1
,
 
0
.
3
,
 
1
]
 
}
}


 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
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
 
"
#
0
f
1
7
2
a
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
1
p
x
 
s
o
l
i
d
 
r
g
b
a
(
1
4
8
,
1
6
3
,
1
8
4
,
0
.
1
5
)
"
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
 
8
,
 
o
v
e
r
f
l
o
w
:
 
"
h
i
d
d
e
n
"
 
}
}


 
 
 
 
 
 
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
 
p
a
d
d
i
n
g
:
 
"
1
0
p
x
 
1
4
p
x
"
,
 
b
o
r
d
e
r
B
o
t
t
o
m
:
 
"
1
p
x
 
s
o
l
i
d
 
r
g
b
a
(
1
4
8
,
1
6
3
,
1
8
4
,
0
.
1
2
)
"
,
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
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
c
e
n
t
e
r
"
,
 
g
a
p
:
 
8
 
}
}
>


 
 
 
 
 
 
 
 
 
 
<
D
a
t
a
b
a
s
e
 
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
 
S
D
 
}
}
 
/
>


 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
8
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
8
0
0
,
 
c
o
l
o
r
:
 
"
#
e
5
e
7
e
b
"
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
0
4
e
m
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
u
s
e
r
s


 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
{
t
a
b
l
e
H
e
a
d
e
r
(
[
"
i
d
"
,
 
"
n
a
m
e
"
,
 
"
e
m
a
i
l
"
,
 
"
c
i
t
y
"
]
)
}


 
 
 
 
 
 
 
 
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
 
o
p
a
c
i
t
y
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
 
o
p
a
c
i
t
y
:
 
1
 
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
4
,
 
d
e
l
a
y
:
 
0
.
2
 
}
}


 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
d
i
s
p
l
a
y
:
 
"
g
r
i
d
"
,
 
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
4
,
 
1
f
r
)
"
 
}
}


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
s
t
y
l
e
=
{
c
e
l
l
}
>
{
U
S
E
R
.
i
d
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
 
s
t
y
l
e
=
{
c
e
l
l
}
>
{
U
S
E
R
.
n
a
m
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
 
s
t
y
l
e
=
{
c
e
l
l
}
>
{
U
S
E
R
.
e
m
a
i
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
 
s
t
y
l
e
=
{
c
e
l
l
}
>
{
U
S
E
R
.
c
i
t
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




 
 
 
 
 
 
{
/
*
 
o
r
d
e
r
s
 
t
a
b
l
e
 
*
/
}


 
 
 
 
 
 
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
 
1
2
 
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
4
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
 
[
0
.
1
6
,
 
1
,
 
0
.
3
,
 
1
]
 
}
}


 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
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
 
"
#
0
f
1
7
2
a
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
1
p
x
 
s
o
l
i
d
 
r
g
b
a
(
1
4
8
,
1
6
3
,
1
8
4
,
0
.
1
5
)
"
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
 
8
,
 
o
v
e
r
f
l
o
w
:
 
"
h
i
d
d
e
n
"
 
}
}


 
 
 
 
 
 
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
 
p
a
d
d
i
n
g
:
 
"
1
0
p
x
 
1
4
p
x
"
,
 
b
o
r
d
e
r
B
o
t
t
o
m
:
 
"
1
p
x
 
s
o
l
i
d
 
r
g
b
a
(
1
4
8
,
1
6
3
,
1
8
4
,
0
.
1
2
)
"
,
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
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
c
e
n
t
e
r
"
,
 
g
a
p
:
 
8
 
}
}
>


 
 
 
 
 
 
 
 
 
 
<
D
a
t
a
b
a
s
e
 
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
 
S
D
 
}
}
 
/
>


 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
8
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
8
0
0
,
 
c
o
l
o
r
:
 
"
#
e
5
e
7
e
b
"
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
0
4
e
m
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
o
r
d
e
r
s


 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
{
t
a
b
l
e
H
e
a
d
e
r
(
[
"
i
d
"
,
 
"
u
s
e
r
_
i
d
"
,
 
"
i
t
e
m
"
,
 
"
t
o
t
a
l
"
]
)
}


 
 
 
 
 
 
 
 
{
O
R
D
E
R
S
.
m
a
p
(
(
o
,
 
i
)
 
=
>
 
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
{
o
.
i
d
}


 
 
 
 
 
 
 
 
 
 
 
 
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
3
5
,
 
d
e
l
a
y
:
 
0
.
2
5
 
+
 
i
 
*
 
0
.
0
8
,
 
e
a
s
e
:
 
[
0
.
1
6
,
 
1
,
 
0
.
3
,
 
1
]
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
d
i
s
p
l
a
y
:
 
"
g
r
i
d
"
,
 
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
4
,
 
1
f
r
)
"
,
 
b
o
r
d
e
r
T
o
p
:
 
"
1
p
x
 
s
o
l
i
d
 
r
g
b
a
(
1
4
8
,
1
6
3
,
1
8
4
,
0
.
0
8
)
"
 
}
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
s
t
y
l
e
=
{
c
e
l
l
}
>
{
o
.
i
d
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
 
s
t
y
l
e
=
{
{
 
.
.
.
c
e
l
l
,
 
c
o
l
o
r
:
 
S
D
 
}
}
>
{
U
S
E
R
.
i
d
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
 
s
t
y
l
e
=
{
c
e
l
l
}
>
{
o
.
i
t
e
m
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
 
s
t
y
l
e
=
{
c
e
l
l
}
>
₹
 
{
o
.
t
o
t
a
l
.
t
o
L
o
c
a
l
e
S
t
r
i
n
g
(
)
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




 
 
 
 
 
 
{
/
*
 
J
O
I
N
 
v
i
s
u
a
l
 
*
/
}


 
 
 
 
 
 
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
 
y
:
 
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
 
y
:
 
0
 
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
4
,
 
d
e
l
a
y
:
 
0
.
4
5
 
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
m
d
:
c
o
l
-
s
p
a
n
-
2
"


 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,


 
 
 
 
 
 
 
 
 
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
8
r
e
m
"
,


 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
"
#
e
5
e
7
e
b
"
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
 
"
#
0
f
1
7
2
a
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
1
p
x
 
s
o
l
i
d
 
r
g
b
a
(
1
4
8
,
1
6
3
,
1
8
4
,
0
.
1
5
)
"
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
 
8
,


 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
1
2
p
x
 
1
4
p
x
"
,


 
 
 
 
 
 
 
 
 
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
7
,


 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
<
s
p
a
n
 
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
 
N
E
U
T
R
A
L
 
}
}
>
-
-
 
t
o
 
f
e
t
c
h
 
a
 
u
s
e
r
 
w
i
t
h
 
o
r
d
e
r
s
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
<
b
r
 
/
>


 
 
 
 
 
 
 
 
<
s
p
a
n
 
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
 
S
D
,
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
 
}
}
>
S
E
L
E
C
T
<
/
s
p
a
n
>
 
u
.
*
,
 
o
.
i
d
,
 
o
.
i
t
e
m
,
 
o
.
t
o
t
a
l


 
 
 
 
 
 
 
 
<
b
r
 
/
>


 
 
 
 
 
 
 
 
<
s
p
a
n
 
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
 
S
D
,
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
 
}
}
>
F
R
O
M
<
/
s
p
a
n
>
 
u
s
e
r
s
 
u


 
 
 
 
 
 
 
 
<
b
r
 
/
>


 
 
 
 
 
 
 
 
<
s
p
a
n
 
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
 
S
D
,
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
 
}
}
>
J
O
I
N
<
/
s
p
a
n
>
 
o
r
d
e
r
s
 
o
 
<
s
p
a
n
 
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
 
S
D
,
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
 
}
}
>
O
N
<
/
s
p
a
n
>
 
o
.
u
s
e
r
_
i
d
 
=
 
u
.
i
d


 
 
 
 
 
 
 
 
<
b
r
 
/
>


 
 
 
 
 
 
 
 
<
s
p
a
n
 
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
 
S
D
,
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
 
}
}
>
W
H
E
R
E
<
/
s
p
a
n
>
 
u
.
i
d
 
=
 
4
2
;


 
 
 
 
 
 
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
 
N
o
S
q
l
V
i
e
w
(
)
 
{


 
 
c
o
n
s
t
 
j
s
o
n
 
=
 
`
{


 
 
"
_
i
d
"
:
 
$
{
U
S
E
R
.
i
d
}
,


 
 
"
n
a
m
e
"
:
 
"
$
{
U
S
E
R
.
n
a
m
e
}
"
,


 
 
"
e
m
a
i
l
"
:
 
"
$
{
U
S
E
R
.
e
m
a
i
l
}
"
,


 
 
"
c
i
t
y
"
:
 
"
$
{
U
S
E
R
.
c
i
t
y
}
"
,


 
 
"
o
r
d
e
r
s
"
:
 
[


 
 
 
 
{
 
"
i
d
"
:
 
$
{
O
R
D
E
R
S
[
0
]
.
i
d
}
,
 
"
i
t
e
m
"
:
 
"
$
{
O
R
D
E
R
S
[
0
]
.
i
t
e
m
}
"
,
 
"
t
o
t
a
l
"
:
 
$
{
O
R
D
E
R
S
[
0
]
.
t
o
t
a
l
}
 
}
,


 
 
 
 
{
 
"
i
d
"
:
 
$
{
O
R
D
E
R
S
[
1
]
.
i
d
}
,
 
"
i
t
e
m
"
:
 
"
$
{
O
R
D
E
R
S
[
1
]
.
i
t
e
m
}
"
,
 
"
t
o
t
a
l
"
:
 
$
{
O
R
D
E
R
S
[
1
]
.
t
o
t
a
l
}
 
}


 
 
]


}
`
;


 
 
c
o
n
s
t
 
l
i
n
e
s
 
=
 
j
s
o
n
.
s
p
l
i
t
(
"
\
n
"
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
g
r
i
d
 
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
1
 
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
3
 
g
a
p
-
4
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
1
2
 
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
4
,
 
d
e
l
a
y
:
 
0
.
0
5
,
 
e
a
s
e
:
 
[
0
.
1
6
,
 
1
,
 
0
.
3
,
 
1
]
 
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
m
d
:
c
o
l
-
s
p
a
n
-
2
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
 
"
#
0
f
1
7
2
a
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
1
p
x
 
s
o
l
i
d
 
r
g
b
a
(
1
4
8
,
1
6
3
,
1
8
4
,
0
.
1
5
)
"
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
 
8
,
 
o
v
e
r
f
l
o
w
:
 
"
h
i
d
d
e
n
"
 
}
}


 
 
 
 
 
 
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
 
p
a
d
d
i
n
g
:
 
"
1
0
p
x
 
1
4
p
x
"
,
 
b
o
r
d
e
r
B
o
t
t
o
m
:
 
"
1
p
x
 
s
o
l
i
d
 
r
g
b
a
(
1
4
8
,
1
6
3
,
1
8
4
,
0
.
1
2
)
"
,
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
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
c
e
n
t
e
r
"
,
 
g
a
p
:
 
8
 
}
}
>


 
 
 
 
 
 
 
 
 
 
<
F
i
l
e
J
s
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
3
.
5
 
h
-
3
.
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
 
c
o
l
o
r
:
 
S
D
 
}
}
 
/
>


 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
8
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
8
0
0
,
 
c
o
l
o
r
:
 
"
#
e
5
e
7
e
b
"
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
0
4
e
m
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
u
s
e
r
s
 
/
 
4
2


 
 
 
 
 
 
 
 
 
 
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
p
r
e


 
 
 
 
 
 
 
 
 
 
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
r
g
i
n
:
 
0
,


 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
1
4
p
x
 
1
6
p
x
"
,


 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,


 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
2
r
e
m
"
,


 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
"
#
e
5
e
7
e
b
"
,


 
 
 
 
 
 
 
 
 
 
 
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
7
,


 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
{
l
i
n
e
s
.
m
a
p
(
(
l
n
,
 
i
)
 
=
>
 
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
{
i
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
6
 
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
3
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
5
 
+
 
i
 
*
 
0
.
0
4
,
 
e
a
s
e
:
 
[
0
.
1
6
,
 
1
,
 
0
.
3
,
 
1
]
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
o
l
o
r
J
s
o
n
(
l
n
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
)
}


 
 
 
 
 
 
 
 
<
/
p
r
e
>


 
 
 
 
 
 
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
 
1
2
 
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
4
,
 
d
e
l
a
y
:
 
0
.
5
 
}
}


 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,


 
 
 
 
 
 
 
 
 
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
8
r
e
m
"
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
 
"
#
0
f
1
7
2
a
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
1
p
x
 
s
o
l
i
d
 
r
g
b
a
(
1
4
8
,
1
6
3
,
1
8
4
,
0
.
1
5
)
"
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
 
8
,


 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
1
2
p
x
 
1
4
p
x
"
,


 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
"
#
e
5
e
7
e
b
"
,


 
 
 
 
 
 
 
 
 
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
7
,


 
 
 
 
 
 
 
 
 
 
a
l
i
g
n
S
e
l
f
:
 
"
s
t
a
r
t
"
,


 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
<
s
p
a
n
 
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
 
N
E
U
T
R
A
L
 
}
}
>
/
/
 
f
e
t
c
h
 
u
s
e
r
 
+
 
o
r
d
e
r
s
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
<
b
r
 
/
>


 
 
 
 
 
 
 
 
<
s
p
a
n
 
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
 
S
D
,
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
 
}
}
>
d
b
.
u
s
e
r
s
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
<
b
r
 
/
>


 
 
 
 
 
 
 
 
&
n
b
s
p
;
&
n
b
s
p
;
.
f
i
n
d
O
n
e
(


 
 
 
 
 
 
 
 
<
b
r
 
/
>


 
 
 
 
 
 
 
 
&
n
b
s
p
;
&
n
b
s
p
;
&
n
b
s
p
;
&
n
b
s
p
;
{
`
{
 
_
i
d
:
 
4
2
 
}
`
}


 
 
 
 
 
 
 
 
<
b
r
 
/
>


 
 
 
 
 
 
 
 
&
n
b
s
p
;
&
n
b
s
p
;
)
;


 
 
 
 
 
 
 
 
<
b
r
 
/
>


 
 
 
 
 
 
 
 
<
b
r
 
/
>


 
 
 
 
 
 
 
 
<
s
p
a
n
 
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
 
N
E
U
T
R
A
L
 
}
}
>
/
/
 
1
 
r
o
u
n
d
 
t
r
i
p
 
·
 
1
 
d
o
c
<
/
s
p
a
n
>


 
 
 
 
 
 
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
 
c
o
l
o
r
J
s
o
n
(
l
i
n
e
:
 
s
t
r
i
n
g
)
:
 
R
e
a
c
t
.
R
e
a
c
t
N
o
d
e
 
{


 
 
/
/
 
v
e
r
y
 
s
m
a
l
l
 
s
y
n
t
a
x
 
t
i
n
t
e
r
,
 
j
u
s
t
 
e
n
o
u
g
h
 
t
o
 
m
a
k
e
 
t
h
e
 
J
S
O
N
 
r
e
a
d
a
b
l
e


 
 
c
o
n
s
t
 
t
r
i
m
m
e
d
 
=
 
l
i
n
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
s
p
a
n
>


 
 
 
 
 
 
{
t
r
i
m
m
e
d
.
s
p
l
i
t
(
/
(
"
[
^
"
]
*
"
)
/
g
)
.
m
a
p
(
(
s
e
g
,
 
i
)
 
=
>
 
{


 
 
 
 
 
 
 
 
i
f
 
(
s
e
g
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
'
"
'
)
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
 
"
#
f
b
b
f
2
4
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
e
g
}


 
 
 
 
 
 
 
 
 
 
 
 
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
>


 
 
 
 
 
 
 
 
 
 
 
 
{
s
e
g
.
s
p
l
i
t
(
/
(
\
b
\
d
+
\
b
)
/
g
)
.
m
a
p
(
(
s
,
 
j
)
 
=
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
^
\
d
+
$
/
.
t
e
s
t
(
s
)
 
?
 
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
j
}
 
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
 
S
D
 
}
}
>
{
s
}
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
,


 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
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
s
p
a
n
>


 
 
)
;


}




/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
T
A
B
 
2
 
-
 
W
h
e
n
 
t
o
 
c
h
o
o
s
e
 
w
h
i
c
h
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/




c
o
n
s
t
 
R
O
W
S
:
 
{
 
a
x
i
s
:
 
s
t
r
i
n
g
;
 
s
q
l
:
 
s
t
r
i
n
g
;
 
n
o
s
q
l
:
 
s
t
r
i
n
g
;
 
l
e
a
n
:
 
"
s
q
l
"
 
|
 
"
n
o
s
q
l
"
 
|
 
"
t
i
e
"
 
}
[
]
 
=
 
[


 
 
{
 
a
x
i
s
:
 
"
S
c
h
e
m
a
"
,
 
s
q
l
:
 
"
S
t
r
i
c
t
,
 
e
n
f
o
r
c
e
d
 
b
y
 
D
B
"
,
 
n
o
s
q
l
:
 
"
F
l
e
x
i
b
l
e
,
 
l
i
v
e
s
 
i
n
 
a
p
p
"
,
 
l
e
a
n
:
 
"
t
i
e
"
 
}
,


 
 
{
 
a
x
i
s
:
 
"
J
o
i
n
s
 
/
 
m
u
l
t
i
-
e
n
t
i
t
y
 
r
e
a
d
s
"
,
 
s
q
l
:
 
"
F
i
r
s
t
-
c
l
a
s
s
,
 
f
a
s
t
 
w
i
t
h
 
i
n
d
e
x
e
s
"
,
 
n
o
s
q
l
:
 
"
A
p
p
 
s
t
i
t
c
h
e
s
,
 
o
f
t
e
n
 
e
x
p
e
n
s
i
v
e
"
,
 
l
e
a
n
:
 
"
s
q
l
"
 
}
,


 
 
{
 
a
x
i
s
:
 
"
S
i
n
g
l
e
-
e
n
t
i
t
y
 
r
e
a
d
s
 
a
t
 
s
c
a
l
e
"
,
 
s
q
l
:
 
"
F
i
n
e
,
 
b
u
t
 
J
O
I
N
s
 
c
o
s
t
 
e
x
t
r
a
 
h
o
p
s
"
,
 
n
o
s
q
l
:
 
"
S
i
n
g
l
e
 
k
e
y
 
l
o
o
k
u
p
,
 
v
e
r
y
 
f
a
s
t
"
,
 
l
e
a
n
:
 
"
n
o
s
q
l
"
 
}
,


 
 
{
 
a
x
i
s
:
 
"
T
r
a
n
s
a
c
t
i
o
n
s
"
,
 
s
q
l
:
 
"
A
C
I
D
 
a
c
r
o
s
s
 
r
o
w
s
 
/
 
t
a
b
l
e
s
"
,
 
n
o
s
q
l
:
 
"
L
i
m
i
t
e
d
,
 
o
f
t
e
n
 
p
e
r
-
d
o
c
u
m
e
n
t
 
o
n
l
y
"
,
 
l
e
a
n
:
 
"
s
q
l
"
 
}
,


 
 
{
 
a
x
i
s
:
 
"
H
o
r
i
z
o
n
t
a
l
 
s
c
a
l
e
-
o
u
t
"
,
 
s
q
l
:
 
"
P
o
s
s
i
b
l
e
 
(
V
i
t
e
s
s
,
 
C
i
t
u
s
)
 
b
u
t
 
h
a
r
d
"
,
 
n
o
s
q
l
:
 
"
B
u
i
l
t
 
i
n
 
(
s
h
a
r
d
i
n
g
 
b
y
 
k
e
y
)
"
,
 
l
e
a
n
:
 
"
n
o
s
q
l
"
 
}
,


 
 
{
 
a
x
i
s
:
 
"
E
v
o
l
v
i
n
g
 
d
a
t
a
 
s
h
a
p
e
"
,
 
s
q
l
:
 
"
M
i
g
r
a
t
i
o
n
 
p
e
r
 
c
h
a
n
g
e
"
,
 
n
o
s
q
l
:
 
"
J
u
s
t
 
w
r
i
t
e
 
t
h
e
 
n
e
w
 
f
i
e
l
d
"
,
 
l
e
a
n
:
 
"
n
o
s
q
l
"
 
}
,


]
;




f
u
n
c
t
i
o
n
 
W
h
e
n
T
o
C
h
o
o
s
e
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
>


 
 
 
 
 
 
<
h
3
 
s
t
y
l
e
=
{
s
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
}
>
W
h
e
n
 
d
o
e
s
 
e
a
c
h
 
o
n
e
 
w
i
n
?
<
/
h
3
>


 
 
 
 
 
 
<
p
 
s
t
y
l
e
=
{
s
e
c
t
i
o
n
D
e
s
c
}
>


 
 
 
 
 
 
 
 
T
h
e
 
h
o
n
e
s
t
 
a
n
s
w
e
r
 
i
s
 
r
a
r
e
l
y
 
&
l
d
q
u
o
;
N
o
S
Q
L
 
i
s
 
w
e
b
 
s
c
a
l
e
.
&
r
d
q
u
o
;
 
I
t
&
r
s
q
u
o
;
s
 
a
 
p
e
r
-
a
x
i
s
 
t
r
a
d
e
.
 
H
o
v
e
r
 
a
n
y


 
 
 
 
 
 
 
 
r
o
w
 
t
o
 
s
e
e
 
w
h
i
c
h
 
s
i
d
e
 
o
f
 
t
h
e
 
t
r
a
d
e
 
l
e
a
n
s
 
w
h
e
r
e
,
 
a
n
d
 
w
h
y
.


 
 
 
 
 
 
<
/
p
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
"
h
i
d
d
e
n
"


 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
"
v
i
s
i
b
l
e
"


 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
s
=
{
{


 
 
 
 
 
 
 
 
 
 
h
i
d
d
e
n
:
 
{
}
,


 
 
 
 
 
 
 
 
 
 
v
i
s
i
b
l
e
:
 
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
 
{
 
s
t
a
g
g
e
r
C
h
i
l
d
r
e
n
:
 
0
.
0
7
 
}
 
}
,


 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
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
 
"
1
p
x
 
s
o
l
i
d
 
v
a
r
(
-
-
e
n
g
-
b
o
r
d
e
r
)
"
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
 
1
0
,


 
 
 
 
 
 
 
 
 
 
o
v
e
r
f
l
o
w
:
 
"
h
i
d
d
e
n
"
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
 
"
v
a
r
(
-
-
e
n
g
-
s
u
r
f
a
c
e
)
"
,


 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
p
l
a
y
:
 
"
g
r
i
d
"
,


 
 
 
 
 
 
 
 
 
 
 
 
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
1
.
1
f
r
 
1
.
3
f
r
 
1
.
3
f
r
 
0
.
6
f
r
"
,


 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
1
0
p
x
 
1
4
p
x
"
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
 
"
v
a
r
(
-
-
e
n
g
-
b
g
-
s
u
b
t
l
e
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
B
o
t
t
o
m
:
 
"
1
p
x
 
s
o
l
i
d
 
v
a
r
(
-
-
e
n
g
-
b
o
r
d
e
r
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,


 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
S
i
z
e
:
 
"
0
.
6
6
r
e
m
"
,


 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
W
e
i
g
h
t
:
 
8
0
0
,


 
 
 
 
 
 
 
 
 
 
 
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
1
e
m
"
,


 
 
 
 
 
 
 
 
 
 
 
 
t
e
x
t
T
r
a
n
s
f
o
r
m
:
 
"
u
p
p
e
r
c
a
s
e
"
,


 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
,


 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
>
A
x
i
s
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
R
e
l
a
t
i
o
n
a
l
 
(
S
Q
L
)
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
D
o
c
u
m
e
n
t
 
(
N
o
S
Q
L
)
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
L
e
a
n
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




 
 
 
 
 
 
 
 
{
R
O
W
S
.
m
a
p
(
(
r
,
 
i
)
 
=
>
 
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
{
r
.
a
x
i
s
}


 
 
 
 
 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
s
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
i
d
d
e
n
:
 
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
 
y
:
 
6
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
i
s
i
b
l
e
:
 
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
 
y
:
 
0
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
3
5
,
 
e
a
s
e
:
 
[
0
.
1
6
,
 
1
,
 
0
.
3
,
 
1
]
 
}
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
w
h
i
l
e
H
o
v
e
r
=
{
{
 
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
 
"
r
g
b
a
(
1
3
2
,
2
0
4
,
2
2
,
0
.
0
4
)
"
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
p
l
a
y
:
 
"
g
r
i
d
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
1
.
1
f
r
 
1
.
3
f
r
 
1
.
3
f
r
 
0
.
6
f
r
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
1
2
p
x
 
1
4
p
x
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
B
o
t
t
o
m
:
 
i
 
<
 
R
O
W
S
.
l
e
n
g
t
h
 
-
 
1
 
?
 
"
1
p
x
 
s
o
l
i
d
 
v
a
r
(
-
-
e
n
g
-
b
o
r
d
e
r
)
"
 
:
 
"
n
o
n
e
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
4
r
e
m
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
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
c
e
n
t
e
r
"
,


 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
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
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
 
}
}
>
{
r
.
a
x
i
s
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
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
 
}
}
>
{
r
.
s
q
l
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
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
 
}
}
>
{
r
.
n
o
s
q
l
}
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
L
e
a
n
B
a
d
g
e
 
l
e
a
n
=
{
r
.
l
e
a
n
}
 
/
>


 
 
 
 
 
 
 
 
 
 
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
 
L
e
a
n
B
a
d
g
e
(
{
 
l
e
a
n
 
}
:
 
{
 
l
e
a
n
:
 
"
s
q
l
"
 
|
 
"
n
o
s
q
l
"
 
|
 
"
t
i
e
"
 
}
)
 
{


 
 
c
o
n
s
t
 
l
a
b
e
l
 
=
 
l
e
a
n
 
=
=
=
 
"
t
i
e
"
 
?
 
"
T
i
e
"
 
:
 
l
e
a
n
.
t
o
U
p
p
e
r
C
a
s
e
(
)
;


 
 
c
o
n
s
t
 
c
o
l
o
r
 
=
 
l
e
a
n
 
=
=
=
 
"
t
i
e
"
 
?
 
N
E
U
T
R
A
L
 
:
 
S
D
;


 
 
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
s
p
a
n


 
 
 
 
 
 
w
h
i
l
e
H
o
v
e
r
=
{
{
 
s
c
a
l
e
:
 
1
.
0
5
 
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
 
t
y
p
e
:
 
"
s
p
r
i
n
g
"
,
 
s
t
i
f
f
n
e
s
s
:
 
4
0
0
,
 
d
a
m
p
i
n
g
:
 
1
8
 
}
}


 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,


 
 
 
 
 
 
 
 
f
o
n
t
S
i
z
e
:
 
"
0
.
6
6
r
e
m
"
,


 
 
 
 
 
 
 
 
f
o
n
t
W
e
i
g
h
t
:
 
8
0
0
,


 
 
 
 
 
 
 
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
1
e
m
"
,


 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
4
p
x
 
8
p
x
"
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


 
 
 
 
 
 
 
 
c
o
l
o
r
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
 
l
e
a
n
 
=
=
=
 
"
t
i
e
"
 
?
 
"
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
"
 
:
 
`
$
{
c
o
l
o
r
}
1
4
`
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
o
r
}
5
5
`
,


 
 
 
 
 
 
 
 
t
e
x
t
A
l
i
g
n
:
 
"
c
e
n
t
e
r
"
,


 
 
 
 
 
 
 
 
d
i
s
p
l
a
y
:
 
"
i
n
l
i
n
e
-
b
l
o
c
k
"
,


 
 
 
 
 
 
}
}


 
 
 
 
>


 
 
 
 
 
 
{
l
a
b
e
l
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
s
p
a
n
>


 
 
)
;


}




/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
T
A
B
 
3
 
-
 
I
n
 
t
h
e
 
w
i
l
d
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/




c
o
n
s
t
 
S
Y
S
T
E
M
S
 
=
 
[


 
 
{
 
w
h
o
:
 
"
R
a
z
o
r
p
a
y
 
p
a
y
m
e
n
t
s
 
l
e
d
g
e
r
"
,
 
p
i
c
k
:
 
"
S
Q
L
"
,
 
r
e
a
s
o
n
:
 
"
M
o
n
e
y
.
 
M
u
l
t
i
-
r
o
w
 
t
r
a
n
s
a
c
t
i
o
n
s
.
 
A
u
d
i
t
a
b
l
e
 
s
c
h
e
m
a
.
"
 
}
,


 
 
{
 
w
h
o
:
 
"
I
n
s
t
a
g
r
a
m
 
f
e
e
d
 
c
a
c
h
e
"
,
 
p
i
c
k
:
 
"
N
o
S
Q
L
"
,
 
r
e
a
s
o
n
:
 
"
E
a
c
h
 
u
s
e
r
 
f
e
t
c
h
e
s
 
t
h
e
i
r
 
o
w
n
 
d
o
c
u
m
e
n
t
.
 
N
o
 
c
r
o
s
s
-
u
s
e
r
 
j
o
i
n
s
 
o
n
 
t
h
e
 
r
e
a
d
 
p
a
t
h
.
"
 
}
,


 
 
{
 
w
h
o
:
 
"
S
w
i
g
g
y
 
o
r
d
e
r
 
h
i
s
t
o
r
y
"
,
 
p
i
c
k
:
 
"
S
Q
L
"
,
 
r
e
a
s
o
n
:
 
"
R
e
p
o
r
t
s
 
a
c
r
o
s
s
 
u
s
e
r
s
,
 
r
e
s
t
a
u
r
a
n
t
s
,
 
d
a
t
e
s
.
 
J
O
I
N
s
 
a
n
d
 
a
g
g
r
e
g
a
t
e
s
 
e
v
e
r
y
w
h
e
r
e
.
"
 
}
,


 
 
{
 
w
h
o
:
 
"
F
l
i
p
k
a
r
t
 
p
r
o
d
u
c
t
 
c
a
t
a
l
o
g
"
,
 
p
i
c
k
:
 
"
N
o
S
Q
L
"
,
 
r
e
a
s
o
n
:
 
"
E
a
c
h
 
p
r
o
d
u
c
t
 
h
a
s
 
d
i
f
f
e
r
e
n
t
 
a
t
t
r
i
b
u
t
e
s
 
(
s
i
z
e
,
 
v
o
l
t
a
g
e
,
 
I
S
B
N
…
)
.
 
S
c
h
e
m
a
 
f
l
e
x
i
b
i
l
i
t
y
 
w
i
n
s
.
"
 
}
,


 
 
{
 
w
h
o
:
 
"
U
b
e
r
 
d
r
i
v
e
r
 
l
o
c
a
t
i
o
n
"
,
 
p
i
c
k
:
 
"
N
o
S
Q
L
"
,
 
r
e
a
s
o
n
:
 
"
H
e
a
v
y
 
w
r
i
t
e
s
,
 
s
i
m
p
l
e
 
k
e
y
,
 
g
e
o
g
r
a
p
h
i
c
 
s
h
a
r
d
i
n
g
.
 
C
a
s
s
a
n
d
r
a
 
/
 
D
y
n
a
m
o
D
B
 
t
e
r
r
i
t
o
r
y
.
"
 
}
,


 
 
{
 
w
h
o
:
 
"
G
i
t
H
u
b
 
r
e
p
o
 
m
e
t
a
d
a
t
a
"
,
 
p
i
c
k
:
 
"
S
Q
L
"
,
 
r
e
a
s
o
n
:
 
"
R
e
p
o
s
 
r
e
l
a
t
e
 
t
o
 
u
s
e
r
s
,
 
o
r
g
s
,
 
i
s
s
u
e
s
,
 
P
R
s
.
 
G
r
a
p
h
-
l
i
k
e
 
j
o
i
n
s
 
e
v
e
r
y
w
h
e
r
e
.
"
 
}
,


]
;




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
T
h
e
W
i
l
d
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
>


 
 
 
 
 
 
<
h
3
 
s
t
y
l
e
=
{
s
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
}
>
H
o
w
 
r
e
a
l
 
s
y
s
t
e
m
s
 
a
c
t
u
a
l
l
y
 
p
i
c
k
<
/
h
3
>


 
 
 
 
 
 
<
p
 
s
t
y
l
e
=
{
s
e
c
t
i
o
n
D
e
s
c
}
>


 
 
 
 
 
 
 
 
S
i
x
 
p
r
o
d
u
c
t
 
s
y
s
t
e
m
s
 
a
n
d
 
w
h
a
t
 
t
h
e
y
 
r
e
a
c
h
 
f
o
r
.
 
N
o
t
i
c
e
 
t
h
a
t
 
t
h
e
 
c
h
o
i
c
e
 
i
s
 
d
i
c
t
a
t
e
d
 
b
y
 
t
h
e


 
 
 
 
 
 
 
 
<
i
>
 
r
e
a
d
 
p
a
t
t
e
r
n
<
/
i
>
,
 
n
o
t
 
t
h
e
 
s
i
z
e
 
o
f
 
t
h
e
 
c
o
m
p
a
n
y
.


 
 
 
 
 
 
<
/
p
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
"
h
i
d
d
e
n
"


 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
"
v
i
s
i
b
l
e
"


 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
s
=
{
{


 
 
 
 
 
 
 
 
 
 
h
i
d
d
e
n
:
 
{
}
,


 
 
 
 
 
 
 
 
 
 
v
i
s
i
b
l
e
:
 
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
 
{
 
s
t
a
g
g
e
r
C
h
i
l
d
r
e
n
:
 
0
.
0
6
 
}
 
}
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
"
g
r
i
d
 
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
1
 
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
2
 
g
a
p
-
3
"


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
{
S
Y
S
T
E
M
S
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
{
s
.
w
h
o
}


 
 
 
 
 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
s
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
i
d
d
e
n
:
 
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
 
y
:
 
8
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
i
s
i
b
l
e
:
 
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
 
y
:
 
0
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
4
,
 
e
a
s
e
:
 
[
0
.
1
6
,
 
1
,
 
0
.
3
,
 
1
]
 
}
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
w
h
i
l
e
H
o
v
e
r
=
{
{
 
y
:
 
-
2
 
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
 
t
y
p
e
:
 
"
s
p
r
i
n
g
"
,
 
s
t
i
f
f
n
e
s
s
:
 
4
0
0
,
 
d
a
m
p
i
n
g
:
 
2
5
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
1
4
p
x
 
1
6
p
x
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
1
p
x
 
s
o
l
i
d
 
v
a
r
(
-
-
e
n
g
-
b
o
r
d
e
r
)
"
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
 
1
0
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
 
"
v
a
r
(
-
-
e
n
g
-
s
u
r
f
a
c
e
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
l
e
x
D
i
r
e
c
t
i
o
n
:
 
"
c
o
l
u
m
n
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
g
a
p
:
 
8
,


 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
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
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
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
c
e
n
t
e
r
"
,
 
j
u
s
t
i
f
y
C
o
n
t
e
n
t
:
 
"
s
p
a
c
e
-
b
e
t
w
e
e
n
"
,
 
g
a
p
:
 
1
2
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
9
r
e
m
"
 
}
}
>
{
s
.
w
h
o
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
S
i
z
e
:
 
"
0
.
6
6
r
e
m
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
W
e
i
g
h
t
:
 
8
0
0
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
1
e
m
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
3
p
x
 
8
p
x
"
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
S
D
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
 
`
$
{
S
D
}
1
4
`
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
p
x
 
s
o
l
i
d
 
$
{
S
D
}
5
5
`
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
.
p
i
c
k
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
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
4
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
,
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
5
5
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
.
r
e
a
s
o
n
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
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
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
A
c
t
i
v
i
t
y
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/




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
 
S
D
_
L
3
_
S
Q
L
v
s
N
o
S
Q
L
A
c
t
i
v
i
t
y
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
 
}
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
 
E
n
g
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
s
h
a
p
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
S
h
a
p
e
"
,
 
i
c
o
n
:
 
<
L
a
y
e
r
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
S
h
a
p
e
M
o
r
p
h
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
c
h
o
o
s
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
W
h
e
n
 
t
o
 
C
h
o
o
s
e
"
,
 
i
c
o
n
:
 
<
W
o
r
k
f
l
o
w
 
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
W
h
e
n
T
o
C
h
o
o
s
e
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
w
i
l
d
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
 
t
h
e
 
W
i
l
d
"
,
 
i
c
o
n
:
 
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
T
h
e
W
i
l
d
 
/
>
 
}
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
 
E
n
g
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
Y
o
u
'
r
e
 
d
e
s
i
g
n
i
n
g
 
a
 
p
a
y
m
e
n
t
s
 
l
e
d
g
e
r
.
 
R
e
a
d
s
 
n
e
e
d
 
t
o
 
r
o
l
l
 
u
p
 
b
y
 
d
a
t
e
 
a
n
d
 
m
e
r
c
h
a
n
t
,
 
a
n
d
 
w
r
i
t
e
s
 
m
u
s
t
 
b
e
 
a
t
o
m
i
c
 
a
c
r
o
s
s
 
t
w
o
 
t
a
b
l
e
s
.
 
W
h
a
t
 
d
o
 
y
o
u
 
r
e
a
c
h
 
f
o
r
 
f
i
r
s
t
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
A
 
d
o
c
u
m
e
n
t
 
s
t
o
r
e
 
l
i
k
e
 
M
o
n
g
o
D
B
"
,
 
"
A
 
r
e
l
a
t
i
o
n
a
l
 
D
B
 
(
P
o
s
t
g
r
e
s
 
/
 
M
y
S
Q
L
)
"
,
 
"
A
 
p
u
r
e
 
k
e
y
-
v
a
l
u
e
 
s
t
o
r
e
 
l
i
k
e
 
R
e
d
i
s
"
,
 
"
A
n
 
o
b
j
e
c
t
 
s
t
o
r
e
 
l
i
k
e
 
S
3
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
A
t
o
m
i
c
 
w
r
i
t
e
s
 
a
c
r
o
s
s
 
m
u
l
t
i
p
l
e
 
e
n
t
i
t
i
e
s
 
+
 
c
r
o
s
s
-
e
n
t
i
t
y
 
r
e
a
d
s
 
a
r
e
 
e
x
a
c
t
l
y
 
w
h
a
t
 
r
e
l
a
t
i
o
n
a
l
 
d
a
t
a
b
a
s
e
s
 
o
p
t
i
m
i
z
e
 
f
o
r
.
 
D
o
c
u
m
e
n
t
 
s
t
o
r
e
s
 
s
t
r
u
g
g
l
e
 
w
i
t
h
 
c
r
o
s
s
-
d
o
c
u
m
e
n
t
 
t
r
a
n
s
a
c
t
i
o
n
s
;
 
k
e
y
-
v
a
l
u
e
 
s
t
o
r
e
s
 
c
a
n
'
t
 
r
o
l
l
 
u
p
 
b
y
 
a
r
b
i
t
r
a
r
y
 
d
i
m
e
n
s
i
o
n
s
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
 
o
f
 
t
h
e
s
e
 
i
s
 
g
e
n
u
i
n
e
l
y
 
e
a
s
i
e
r
 
w
i
t
h
 
a
 
d
o
c
u
m
e
n
t
 
s
t
o
r
e
 
t
h
a
n
 
w
i
t
h
 
a
 
r
e
l
a
t
i
o
n
a
l
 
D
B
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
A
d
d
i
n
g
 
a
 
n
e
w
 
o
p
t
i
o
n
a
l
 
f
i
e
l
d
 
t
o
 
o
n
e
 
u
s
e
r
 
w
i
t
h
o
u
t
 
a
 
m
i
g
r
a
t
i
o
n
"
,


 
 
 
 
 
 
 
 
"
R
u
n
n
i
n
g
 
a
n
 
a
n
a
l
y
t
i
c
a
l
 
q
u
e
r
y
 
t
h
a
t
 
j
o
i
n
s
 
f
i
v
e
 
t
a
b
l
e
s
"
,


 
 
 
 
 
 
 
 
"
E
n
f
o
r
c
i
n
g
 
a
 
u
n
i
q
u
e
 
c
o
n
s
t
r
a
i
n
t
 
a
c
r
o
s
s
 
t
w
o
 
c
o
l
u
m
n
s
"
,


 
 
 
 
 
 
 
 
"
F
o
r
e
i
g
n
 
k
e
y
s
 
w
i
t
h
 
c
a
s
c
a
d
e
 
d
e
l
e
t
e
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
 
0
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
S
c
h
e
m
a
 
f
l
e
x
i
b
i
l
i
t
y
 
i
s
 
a
 
r
e
a
l
 
d
o
c
u
m
e
n
t
-
s
t
o
r
e
 
s
t
r
e
n
g
t
h
.
 
T
h
e
 
o
t
h
e
r
 
t
h
r
e
e
 
a
r
e
 
S
Q
L
 
t
e
r
r
i
t
o
r
y
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
A
n
 
i
n
t
e
r
v
i
e
w
e
r
 
a
s
k
s
:
 
'
W
h
y
 
i
s
 
r
e
a
d
i
n
g
 
a
 
u
s
e
r
 
w
i
t
h
 
t
h
e
i
r
 
o
r
d
e
r
s
 
o
n
e
 
r
o
u
n
d
 
t
r
i
p
 
i
n
 
a
 
d
o
c
u
m
e
n
t
 
m
o
d
e
l
 
b
u
t
 
t
w
o
 
i
n
 
a
 
r
e
l
a
t
i
o
n
a
l
 
o
n
e
?
'
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
D
o
c
u
m
e
n
t
 
s
t
o
r
e
s
 
a
r
e
 
w
r
i
t
t
e
n
 
i
n
 
f
a
s
t
e
r
 
l
a
n
g
u
a
g
e
s
.
"
,


 
 
 
 
 
 
 
 
"
D
o
c
u
m
e
n
t
 
s
t
o
r
e
s
 
e
m
b
e
d
 
r
e
l
a
t
e
d
 
d
a
t
a
 
i
n
s
i
d
e
 
o
n
e
 
d
o
c
u
m
e
n
t
;
 
r
e
l
a
t
i
o
n
a
l
 
o
n
e
s
 
s
t
o
r
e
 
r
e
l
a
t
e
d
 
r
o
w
s
 
i
n
 
s
e
p
a
r
a
t
e
 
t
a
b
l
e
s
 
a
n
d
 
n
e
e
d
 
a
 
J
O
I
N
.
"
,


 
 
 
 
 
 
 
 
"
R
e
l
a
t
i
o
n
a
l
 
d
a
t
a
b
a
s
e
s
 
d
o
n
'
t
 
s
u
p
p
o
r
t
 
i
n
d
e
x
e
s
.
"
,


 
 
 
 
 
 
 
 
"
D
o
c
u
m
e
n
t
 
s
t
o
r
e
s
 
c
a
c
h
e
 
m
o
r
e
 
a
g
g
r
e
s
s
i
v
e
l
y
.
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
E
m
b
e
d
d
i
n
g
 
v
s
 
n
o
r
m
a
l
i
z
i
n
g
 
i
s
 
t
h
e
 
h
e
a
r
t
 
o
f
 
t
h
e
 
t
r
a
d
e
.
 
T
h
e
 
p
r
i
c
e
 
o
f
 
e
m
b
e
d
d
i
n
g
 
i
s
 
d
u
p
l
i
c
a
t
i
o
n
 
a
n
d
 
h
a
r
d
e
r
 
c
r
o
s
s
-
e
n
t
i
t
y
 
q
u
e
r
i
e
s
;
 
t
h
e
 
p
r
i
c
e
 
o
f
 
n
o
r
m
a
l
i
z
i
n
g
 
i
s
 
t
h
e
 
J
O
I
N
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
a
t
e
m
e
n
t
 
i
s
 
c
l
o
s
e
s
t
 
t
o
 
t
h
e
 
t
r
u
t
h
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
N
o
S
Q
L
 
s
c
a
l
e
s
;
 
S
Q
L
 
d
o
e
s
n
'
t
.
"
,


 
 
 
 
 
 
 
 
"
S
Q
L
 
i
s
 
a
l
w
a
y
s
 
m
o
r
e
 
r
e
l
i
a
b
l
e
 
t
h
a
n
 
N
o
S
Q
L
.
"
,


 
 
 
 
 
 
 
 
"
T
h
e
 
c
h
o
i
c
e
 
d
e
p
e
n
d
s
 
m
o
s
t
l
y
 
o
n
 
t
h
e
 
r
e
a
d
 
p
a
t
t
e
r
n
 
a
n
d
 
c
o
n
s
i
s
t
e
n
c
y
 
n
e
e
d
s
,
 
n
o
t
 
o
n
 
t
r
a
f
f
i
c
 
v
o
l
u
m
e
.
"
,


 
 
 
 
 
 
 
 
"
B
i
g
 
c
o
m
p
a
n
i
e
s
 
u
s
e
 
N
o
S
Q
L
;
 
s
m
a
l
l
 
o
n
e
s
 
u
s
e
 
S
Q
L
.
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
B
o
t
h
 
c
a
n
 
s
c
a
l
e
.
 
B
o
t
h
 
c
a
n
 
b
e
 
r
e
l
i
a
b
l
e
.
 
T
h
e
 
h
o
n
e
s
t
 
a
n
s
w
e
r
 
i
s
 
t
h
e
 
t
r
a
d
e
 
i
s
 
p
e
r
-
w
o
r
k
l
o
a
d
,
 
d
r
i
v
e
n
 
b
y
 
a
c
c
e
s
s
 
p
a
t
t
e
r
n
s
 
a
n
d
 
h
o
w
 
s
t
r
i
c
t
 
y
o
u
 
n
e
e
d
 
c
o
n
s
i
s
t
e
n
c
y
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
E
n
g
i
n
e
e
r
i
n
g
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
S
Q
L
 
v
s
 
N
o
S
Q
L
"


 
 
 
 
 
 
l
e
v
e
l
=
{
3
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
T
h
e
 
c
l
a
s
s
i
c
 
'
w
h
i
c
h
 
D
B
 
d
o
 
y
o
u
 
p
i
c
k
'
 
f
o
l
l
o
w
-
u
p
 
i
n
 
e
v
e
r
y
 
H
L
D
 
r
o
u
n
d
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


