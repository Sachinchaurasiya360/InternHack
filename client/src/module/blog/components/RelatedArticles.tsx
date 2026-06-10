
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
 
t
y
p
e
 
{
 
B
l
o
g
P
o
s
t
 
}
 
f
r
o
m
 
"
@
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
 
B
l
o
g
C
a
r
d
 
f
r
o
m
 
"
.
/
B
l
o
g
C
a
r
d
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
 
R
e
l
a
t
e
d
A
r
t
i
c
l
e
s
P
r
o
p
s
 
{


 
 
p
o
s
t
s
:
 
B
l
o
g
P
o
s
t
[
]
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
 
R
e
l
a
t
e
d
A
r
t
i
c
l
e
s
(
{


 
 
p
o
s
t
s
,


}
:
 
R
e
l
a
t
e
d
A
r
t
i
c
l
e
s
P
r
o
p
s
)
 
{


 
 
i
f
 
(
!
p
o
s
t
s
.
l
e
n
g
t
h
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
"
m
t
-
2
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
m
b
-
8
 
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
4
"
>


 
 
 
 
 
 
 
 
<
d
i
v
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
2
x
l
 
m
d
:
t
e
x
t
-
3
x
l
 
f
o
n
t
-
b
l
a
c
k
 
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


 
 
 
 
 
 
 
 
 
 
 
 
R
e
l
a
t
e
d
 
A
r
t
i
c
l
e
s


 
 
 
 
 
 
 
 
 
 
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
>


 
 
 
 
 
 
 
 
 
 
 
 
C
o
n
t
i
n
u
e
 
e
x
p
l
o
r
i
n
g
 
s
i
m
i
l
a
r
 
i
n
s
i
g
h
t
s
 
a
n
d
 
c
a
r
e
e
r
 
r
e
s
o
u
r
c
e
s


 
 
 
 
 
 
 
 
 
 
<
/
p
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
6
 
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
 
x
l
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
"
>


 
 
 
 
 
 
 
 
{
p
o
s
t
s
.
m
a
p
(
(
p
o
s
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
p
o
s
t
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
 
y
:
 
1
8
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
w
h
i
l
e
I
n
V
i
e
w
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


 
 
 
 
 
 
 
 
 
 
 
 
v
i
e
w
p
o
r
t
=
{
{
 
o
n
c
e
:
 
t
r
u
e
 
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
e
l
a
y
:
 
i
n
d
e
x
 
*
 
0
.
0
8
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
B
l
o
g
C
a
r
d
 
p
o
s
t
=
{
p
o
s
t
}
 
i
n
d
e
x
=
{
i
n
d
e
x
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
